new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    cource: 'Webエンジニアコース',
    acceptance_period: '2019年01月期',
    default_last_id: 3,
    students: [
      { id: 1, name: '野呂浩良', cource: '機械学習コース', acceptance_period: '2019年01月期' },
      { id: 2, name: '富永修司', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' },
      { id: 3, name: '斉藤一起', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
      // この function() { } の中にaddStudentメソッド
      // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
      if ( this.name == "" && this.cource == "" && this.acceptance_period == "" ){
        alert("全ての項目を入力してください");
        return false;
      }
      new_id = this.default_last_id + 1;
      this.default_last_id = new_id;
      this.students.push({ id: new_id, name: this.name, cource: this.cource, acceptance_period: this.acceptance_period })
    }
  }
})
