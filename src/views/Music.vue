<template>
  <div id="music">
    <div class="box">
      <div class="search">
        <el-row type="flex" :gutter="10" justify="center">
          <el-col :span="6">
            <el-input v-model="searchKey"></el-input>
          </el-col>
          <el-col :span="1">
            <el-button @click="searchMusic">搜索</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <div class="songs">
          <ul>
            <li v-for="song in songs" :key="song.id">
              <el-row type="flex">
                <el-col :span="20">{{song.name}} - {{song.artist}}</el-col>
                <el-col :span="2">
                  <i :class="playState" @click="playInList"></i>
                </el-col>
                <el-col :span="2">
                  <i class="el-icon-delete" @click="delSong(song.id)"></i>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
        <div class="list">
          <el-table :data="searchResult" max-height="600" height="600">
            <el-table-column prop="name" label="歌名" width="350"></el-table-column>
            <el-table-column prop="artists[0].name" label="歌手" width="200"></el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="play(scope.row)" size="small">播放</el-button>
                <el-button @click="add(scope.row)" size="small">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "music",
  data() {
    return {
      searchKey: "",
      searchResult: [],
      songUrl: "",
      songs: [
        {
          id: "1",
          name: "yellow",
          artist: "Coldplay"
        },
        {
          id: "2",
          name: "yellow",
          artist: "Coldplay"
        },
        {
          id: "3",
          name: "yellow",
          artist: "Coldplay"
        },
        {
          id: "4",
          name: "yellow",
          artist: "Coldplay"
        },
        {
          id: "5",
          name: "yellow",
          artist: "Coldplay"
        }
      ],
      playState: "el-icon-video-play"
    };
  },
  methods: {
    async searchMusic() {
      let res = await fetch(
        `http://localhost:3000/search?keywords=${this.searchKey}`
      );
      let result = await res.json();
      this.searchResult = result.result.songs;
    },
    async play(row) {
      let res = await fetch(`http://localhost:3000/song/url?id=${row.id}`);
      let result = await res.json();
      this.songUrl = result.data[0].url;
    },
    playInList() {
      console.log(22);
    },
    delSong(id) {
      this.songs.forEach((song, index) => {
        if (id == song.id) {
          this.songs.splice(index, 1);
          return;
        }
      });
    },
    add(row) {
      if (!row.id) return;
      let newSong = {};
      newSong.id = row.id;
      newSong.name = row.name;
      newSong.artist = row.artists[0].name;
      let mark = true;
      this.songs.forEach(song => {
        if (song.id == newSong.id) return;
        console.log(newSong.id)
        
      });
      // this.songs.push(newSong);
    }
  }
};
</script>
<style>
#music {
  text-align: center;
}
.list {
  padding: 10px;
  height: 600px;
  width: 700px;
  background-color: aqua;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
}
.songs {
  width: 400px;
  height: 600px;
  overflow-y: auto;
  text-align: left;
}
.container {
  display: flex;
  height: 500px;
}
.songs::-webkit-scrollbar {
  display: none;
}
ul {
  list-style: none;
}
</style>