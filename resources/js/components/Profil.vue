<template>
  <!-- Main Content -->
  <div class="main-content">
    <section class="section">
      <div class="section-header">
        <h1>Buku</h1>
      </div>

      <div class="section-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4>Data Buku</h4>
                  <div class="card-header-action">
                    <a href="#tambahbuku" data-toggle="modal" class="btn btn-primary">Tambah</a>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table align-items-center table-hover table-bordered">
                      <thead class="thead-light">
                        <tr>
                          <th>TITLE</th>
                          <th>KONTEN</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(post, index) in posts" :key="post.id">
                          <td>{{ post.title }}</td>
                          <td>{{ post.content }}</td>
                          <td class="text-center">
                            <router-link
                              :to="{name: 'edit', params: { id: post.id }}"
                              class="btn btn-sm btn-primary"
                            >EDIT</router-link>
                            <button
                              v-on:click="PostDelete(post.id, index)"
                              class="btn btn-sm btn-danger"
                            >HAPUS</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
$(document).ready(function() {
  $("#tabel").DataTable();
});
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    let uri = "http://localhost:8000/api/posts";
    this.axios.get(uri).then(response => {
      this.posts = response.data.data;
    });
  },
  methods: {
    PostDelete(id, index) {
      if (confirm("Data akan dihapus!")) {
        let uri = `http://localhost:8000/api/posts/${id}`;
        this.axios
          .delete(uri)
          .then(response => {
            this.posts.splice(index, 1);
          })
          .catch(error => {
            alert("system error!");
          });
      }
    }
  }
};
</script>
