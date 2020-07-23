const bigURL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'

const table = new Vue({
  el: '#table',
  data: {
    dataArr: [],
    pageNum: 0,
    elPerPage: 50
  },
  created: function() {
      fetch(bigURL)
        .then(response => response.body)
        .then(stream => {
          const reader = stream.getReader();
          let data = '';

          reader.read().then(function processText({ done, value }) {
            if (done) {
              table.dataArr = JSON.parse(data);
              return;
            }

            const chunk = new TextDecoder('utf-8').decode(value)
            data += chunk;
            return reader.read().then(processText);
          });
        })
    },
  computed: {
    pageCount() {
      const len = this.dataArr.length
      return Math.ceil(len / this.elPerPage)
    }, 
    paginatedData() {
      const start = this.pageNum * this.elPerPage,
            end = start + this.elPerPage;
      return this.dataArr.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      this.pageNum++
    },
    prevPage() {
      this.pageNum--
    },
    sortById() {
     this.dataArr = this.dataArr.sort((a, b) => {
       return a.id - b.id
     }) 
    },
    sortByFirstName() {
      this.dataArr = this.dataArr.sort((a, b) => {
        return /*string comparison*/
      })
    },
    sortByLastName() {
      this.dataArr = this.dataArr.sort((a, b) => {
        return /*string*/
      })
    },
    sortByEmail() {
      this.dataArr = this.dataArr.sort((a, b) => {
        return /*string*/
      })
    },
    sortByPhone() {
      this.dataArr = this.dataArr.sort((a, b) => {
        return /*string*/
      })
    }
  }
})