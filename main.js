const bigURL = 'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'

const table = new Vue({
  el: '#table',
  data: {
    dataArr: [],
    filteredData: [],
    pageNum: 0,
    elPerPage: 50,
    sortedBy: {
      id: 0,
      firstName: 0,
      lastName: 0,
      email: 0,
      phone: 0
    },
    searchBy: {
      id: {
        expanded: false,
        text: ''
      },
      firstName: {
        expanded: false,
        text: ''
      },
      lastName: {
        expanded: false,
        text: ''
      },
      email: {
        expanded: false,
        text: ''
      },
      phone: {
        expanded: false,
        text: ''
      },
    }
  },
  created: function() {
      fetch(bigURL)
        .then(response => response.body)
        .then(stream => {
          const reader = stream.getReader();
          let data = '';

          reader.read().then(function processText({ done, value }) {
            if (done) {
              table.dataArr = JSON.parse(data)
              table.filteredData = table.dataArr
              return;
            }

            const chunk = new TextDecoder('utf-8').decode(value)
            data += chunk
            return reader.read().then(processText)
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
            end = start + this.elPerPage
      return this.filteredData.slice(start, end)
    },
    searchBtnExpanded() {
      let expanded = false
      for(let prop in this.searchBy) {
        if(this.searchBy[prop].expanded) {
          expanded = true
          break
        }
      }
      return expanded;
    }
  },
  methods: {
    showNextPage(e, pages = 1) {
      this.pageNum = this.pageNum + pages
    },
    showPrevPage(e, pages = 1) {
      this.pageNum = this.pageNum - pages
    },
    showFirstPage() {
      this.pageNum = 0
    },
    showLastPage() {
      this.pageNum = this.pageCount - 1
    },
    sortById() {
      this.sortBy('id')
    },
    sortByFirstName() {
      this.sortBy('firstName') 
    },
    sortByLastName() {
      this.sortBy('lastName')
    },
    sortByEmail() {
      this.sortBy('email')
    },
    sortByPhone() {
      this.sortBy('phone')
    },
    sortBy(prop) {
      for (let property in this.sortedBy) {
        if(prop != property) {
          this.sortedBy[property] = 0
        }
      }
      switch(this.sortedBy[prop]) {
        case -1: 
          this.sortedBy[prop] = 1;
          break;
        case 1:
          this.sortedBy[prop] = -1;
          break;
        case 0: 
          this.sortedBy[prop] = 1;
          break;
      }
      if(this.sortedBy[prop] == -1) {
        this.filteredData.reverse()
        return
      }
      if(typeof (this.filteredData[0])[prop] == 'number') {
        this.filteredData.sort((a, b) => {
          return a[prop] - b[prop]
        })
      } else {
        this.filteredData.sort((a, b) => {
          const propValue_1 = a[prop]
          const propValue_2 = b[prop]
          if(propValue_1.toLowerCase() > propValue_2.toLowerCase()) {
            return 1
          } else if(propValue_1.toLowerCase() < propValue_2.toLowerCase()) {
            return -1
          } else {
            return 0
          }
        }) 
        
      }
    },
    showIdInput () {
      this.showInput('id')
    },
    showFirstNameInput() {
      this.showInput('firstName')
    },
    showLastNameInput() {
      this.showInput('lastName')
    },
    showEmailInput() {
      this.showInput('email')
    },
    showPhoneInput() {
      this.showInput('phone')
    },
    showInput(prop) {
      for(let property in this.searchBy) {
        if(property == prop) {
          this.searchBy[property].expanded = !(this.searchBy[property].expanded)
        } else {
          this.searchBy[property].expanded = false
          this.searchBy[property].text = ''
        }
      }
    },
    filterData() {
      for(let prop in this.searchBy) {
        if(this.searchBy[prop].text !== '') {
          this.filteredData = this.dataArr.filter(el => {
            return el[prop].toString().includes(this.searchBy[prop].text)
          })
        }
      }
    }
  }
})

