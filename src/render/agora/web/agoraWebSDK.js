import AgoraRTC from "agora-rtc-sdk-ng"
const APPID="appid";
const remoteUsers={}

// const clientStats = client.getRTCStats();        获取当前通话的统计信息 https://docs.agora.io/cn/Video/API%20Reference/web_ng/interfaces/agorartcstats.html

export default class AgoraWebClient {

    constructor() {
        this.client = null;
        this.localTracks = {        //采集到的本地音视频对象
            videoTrack: null,
            audioTrack: null
        };
        this.connectedUid='';
        // this.remoteUsers = {};
        this.options = {    //client options        
            appid: APPID,
            channel: null,
            uid: null,
            token: null,
            role:'host'
        };
    }
    // 创建初始化client
    creatClient(appid,channel,token,local_node,remote_node){
        this.client=AgoraRTC.createClient({ mode: 'live', codec: 'h264' });
        this.join(appid,channel,token,local_node,remote_node);
    }


async join(appid,channel,token,local_node,remote_node) {
    const _this=this;
    _this.options.appid=appid||APPID;
    _this.options.channel=channel;
    _this.options.token=token;

  // 添加事件侦听器以当远程用户加入或者离开可以获取到远端用户内容
  _this.client.on("user-published", _this.handleUserPublished.bind(this));
  _this.client.on("user-unpublished", _this.handleUserUnpublished.bind(this));
  _this.client.setClientRole(_this.options.role)


  _this.options.uid=await _this.client.join(_this.options.appid, _this.options.channel, _this.options.token || null);
  if(_this.options.role=='host'){
    _this.localTracks.audioTrack=await AgoraRTC.createMicrophoneAudioTrack();
    _this.localTracks.videoTrack=await AgoraRTC.createCameraVideoTrack()
     // 播放本地视频流
    _this.localTracks.videoTrack.play(local_node);
    //   $("#local-player-name").text(`localVideo(${options.uid})`);
    // publish local tracks to channel
    await _this.client.publish(Object.values(_this.localTracks));
    console.log("publish success");
  }
  
  // 使用Promise.all同时得到本地音频和用户id
//   [ _this.options.uid, _this.localTracks.audioTrack, _this.localTracks.videoTrack ] = await Promise.all([
//     // 加入频道
//     _this.client.join(_this.options.appid, _this.options.channel, _this.options.token || null),
//     // 使用本地麦克风和摄像头
//     AgoraRTC.createMicrophoneAudioTrack(),
//     AgoraRTC.createCameraVideoTrack()
//   ]);
 
}

 handleUserPublished(user, mediaType) {     //获取添加远端用户信息
    const _this=this
  const id = user.uid;
  remoteUsers[id] = user;
//   this.remoteUsers.map((stream,index)=>{
//       this.subscribe(stream, {video:true,audio:true});
//   })
try {
    _this.subscribe(user, mediaType);
} catch (error) {
    console.log(error,'0-0-0--0-0-0-0-0-0--0-0-0-0-0-0-0-')
}
  
}

 handleUserUnpublished(user) {              //删除用户信息
  const id = user.uid;
  delete remoteUsers[id];
}

async subscribe(user, mediaType) {    //加载呈现远端视频流
  const uid = user.uid;
  // subscribe to a remote user
  await this.client.subscribe(user, mediaType);
  console.log("subscribe success",'=-=-==-0909090909===-===-=-');
  if (mediaType=='video' ) {
    const player = `
      <div id="player-wrapper-${uid}">
        <p class="player-name">remoteUser(${uid})</p>
        <div id="player-${uid}" class="player" style="height:500px"></div>
      </div>
    `
    const remoteList=document.getElementById("remote");
    remoteList.innerHTML=remoteList.innerHTML+player;
    console.log('html追加成功了！！！！！！！')
    user.videoTrack.play(`player-${uid}`);
  }
  if (mediaType === 'audio') {
    user.audioTrack.play();
  }
}

async leave() {                    //退出关闭音频流
    const _this=this
  for (trackName in _this.localTracks) {
    var track = _this.localTracks[trackName];
    if(track) {
      track.stop();
      track.close();
      _this.localTracks[trackName] = undefined;
    }
  }

  // 退出远端用户
  remoteUsers = {};
//   $("#remote-playerlist").html("");

  // leave the channel
  await this.client.leave();
  document.getElementById('remote').innerHTML=''
//   $("#local-player-name").text("");
//   $("#join").attr("disabled", false);
//   $("#leave").attr("disabled", true);
//   console.log("client leaves channel success");
}

}