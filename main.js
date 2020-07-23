const bigURL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'

const table = new Vue({
  el: '#table',
  data: {
  /*  dataArr: [
      {"id":984,"firstName":"Serena","lastName":"Jordan","email":"AMaclatchie@massa.io","phone":"(618)087-6354","adress":{"streetAddress":"8402 Vel Ave","city":"Augusta","state":"MA","zip":"14732"},"description":"{lorem|32"},{"id":762,"firstName":"Kerrissa","lastName":"Mauro","email":"MCain@molestie.io","phone":"(560)154-0008","adress":{"streetAddress":"3665 Sit Dr","city":"Moultrie","state":"MO","zip":"61188"},"description":"{lorem|32"},{"id":619,"firstName":"Kola","lastName":"Nash","email":"TRodriguez@ipsum.ly","phone":"(979)496-6709","adress":{"streetAddress":"1242 Nullam Ave","city":"El Dorado","state":"CA","zip":"58876"},"description":"{lorem|32"},{"id":672,"firstName":"Alyce","lastName":"Bastian","email":"CHopper@lorem.ly","phone":"(598)350-8447","adress":{"streetAddress":"8027 Ipsum Ct","city":"Pickerington","state":"GA","zip":"32249"},"description":"{lorem|32"},{"id":790,"firstName":"Shelley","lastName":"Woolverton","email":"IPiteo@magna.org","phone":"(222)951-1301","adress":{"streetAddress":"9275 Lacus Dr","city":"Woodlawn","state":"MI","zip":"15582"},"description":"{lorem|32"},{"id":343,"firstName":"Joe","lastName":"Sessa","email":"SLichtenwalner@facilisis.org","phone":"(722)125-6300","adress":{"streetAddress":"4802 Facilisis Ct","city":"Miami","state":"MT","zip":"45459"},"description":"{lorem|32"},{"id":948,"firstName":"Jayashree","lastName":"Kasuganti","email":"GWalls@ipsum.ly","phone":"(747)418-8312","adress":{"streetAddress":"1971 In Rd","city":"Curtis Bay","state":"MO","zip":"15933"},"description":"{lorem|32"},{"id":923,"firstName":"Lynda","lastName":"Dartmann","email":"MKhan@mi.org","phone":"(414)827-7897","adress":{"streetAddress":"1758 Consequat Ave","city":"Bloomingdale","state":"KY","zip":"22269"},"description":"{lorem|32"},{"id":136,"firstName":"Stephan","lastName":"Bednarsh","email":"SOrtiz@ac.io","phone":"(296)049-9061","adress":{"streetAddress":"4453 Velit Ln","city":"Slidell","state":"AK","zip":"53712"},"description":"{lorem|32"},{"id":769,"firstName":"Audrey","lastName":"Ortiz","email":"FShanoski@scelerisque.org","phone":"(141)411-7165","adress":{"streetAddress":"2151 Ipsum St","city":"Gig Harbor","state":"NH","zip":"39822"},"description":"{lorem|32"},{"id":359,"firstName":"Savita","lastName":"Dover","email":"KPrezzavento@non.org","phone":"(840)904-3852","adress":{"streetAddress":"9554 Ac Dr","city":"Winchester","state":"WI","zip":"65783"},"description":"{lorem|32"},{"id":26,"firstName":"Sherrye","lastName":"Moffett","email":"SBascoe@dolor.io","phone":"(805)838-0846","adress":{"streetAddress":"5770 Elementum Ct","city":"Toronto","state":"RI","zip":"34863"},"description":"{lorem|32"},{"id":201,"firstName":"Shannon","lastName":"Collier","email":"MZhu@vel.ly","phone":"(400)688-9602","adress":{"streetAddress":"853 Porttitor Ln","city":"Camden","state":"GA","zip":"18704"},"description":"{lorem|32"},{"id":304,"firstName":"Myra","lastName":"Richard","email":"AToothman@neque.io","phone":"(346)494-4983","adress":{"streetAddress":"908 Nec St","city":"Pawtucket","state":"WA","zip":"87953"},"description":"{lorem|32"},{"id":194,"firstName":"Rivka","lastName":"Jordan","email":"MBartleson@amet.gov","phone":"(222)367-3282","adress":{"streetAddress":"5621 Augue Ln","city":"Mount Morris","state":"AL","zip":"62454"},"description":"{lorem|32"},{"id":278,"firstName":"Renardo","lastName":"Guilfoyle","email":"ABoblett@curabitur.gov","phone":"(312)994-1790","adress":{"streetAddress":"9718 Adipiscing Ct","city":"Yonkers","state":"SD","zip":"61668"},"description":"{lorem|32"},{"id":905,"firstName":"Cathryn","lastName":"Guth","email":"ADupont@ipsum.com","phone":"(279)743-8412","adress":{"streetAddress":"6711 Sit Ct","city":"Blaine","state":"NH","zip":"49468"},"description":"{lorem|32"},{"id":752,"firstName":"Yan","lastName":"Schlottman","email":"DBeebe@aenean.net","phone":"(256)320-2118","adress":{"streetAddress":"4808 Nec Ct","city":"Norfolk","state":"KY","zip":"36264"},"description":"{lorem|32"},{"id":3,"firstName":"Deborah","lastName":"Parsons","email":"RRovito@porta.net","phone":"(350)835-9672","adress":{"streetAddress":"5709 Consectetur Ave","city":"Columbus","state":"PA","zip":"54398"},"description":"{lorem|32"},{"id":768,"firstName":"Doris","lastName":"Badertscher","email":"KHunt@dolor.net","phone":"(458)198-7262","adress":{"streetAddress":"468 Ante Dr","city":"Bloomingdale","state":"DE","zip":"96266"},"description":"{lorem|32"},{"id":893,"firstName":"Sunghoon","lastName":"Vyater","email":"XBubel@eros.gov","phone":"(192)583-2091","adress":{"streetAddress":"6149 Suspendisse Ave","city":"Huntsville","state":"OH","zip":"20548"},"description":"{lorem|32"},{"id":483,"firstName":"Pelagija","lastName":"Penning","email":"AHolland@sollicitudin.org","phone":"(882)197-2747","adress":{"streetAddress":"7095 Dui Ln","city":"Hobbs","state":"OH","zip":"99177"},"description":"{lorem|32"},{"id":77,"firstName":"Clint","lastName":"Mcwhorter","email":"NDubrow@aliquam.gov","phone":"(648)194-8096","adress":{"streetAddress":"5876 Nec Ct","city":"Rural","state":"GA","zip":"47761"},"description":"{lorem|32"},{"id":478,"firstName":"LaNisha","lastName":"Sobel","email":"MConk@vitae.io","phone":"(845)038-6781","adress":{"streetAddress":"810 Convallis Dr","city":"Los Angeles","state":"AZ","zip":"71007"},"description":"{lorem|32"},{"id":682,"firstName":"Steven","lastName":"Theobald","email":"LFreund@at.gov","phone":"(820)445-3912","adress":{"streetAddress":"8312 At Ave","city":"Wasington Dc","state":"GA","zip":"69613"},"description":"{lorem|32"},{"id":227,"firstName":"Howard","lastName":"Amacker","email":"SBussey@nunc.net","phone":"(192)713-3655","adress":{"streetAddress":"5609 Sed Ave","city":"Thornton","state":"DC","zip":"67335"},"description":"{lorem|32"},{"id":354,"firstName":"Savita","lastName":"Miranda","email":"DAsfour@in.gov","phone":"(216)445-7015","adress":{"streetAddress":"1853 Consequat Dr","city":"Lititz","state":"NY","zip":"70675"},"description":"{lorem|32"},{"id":473,"firstName":"Aydin","lastName":"Correll","email":"PGunter@augue.net","phone":"(467)819-1891","adress":{"streetAddress":"7107 Odio Dr","city":"Massillon","state":"ND","zip":"24826"},"description":"{lorem|32"},{"id":986,"firstName":"Reginald","lastName":"Zavala","email":"IKasprzak@pulvinar.com","phone":"(249)717-1492","adress":{"streetAddress":"4683 Nullam Ct","city":"Harrisburg","state":"SD","zip":"44127"},"description":"{lorem|32"}
    ],
    */
      /*
    * придумать стутасы рядков
    */
    dataArr: [
      {
        id: 1,
        firstName: 'dan'
      }
    ],
    compKey: 0
  },
  methods: {
    loadData() {
      console.log('start loading')
      fetch(bigURL).then(response => readStream(response.body))
      function readStream(stream) {
          const reader = stream.getReader();
          let data = '';

          reader.read().then(function processText({ done, value }) {
            if (done) {
              console.log("Stream complete");
              table.dataArr = JSON.parse(data);
              return;
            }

            const chunk = new TextDecoder('utf-8').decode(value)
            data += chunk;
            return reader.read().then(processText);
          });
        }
    },
    reloadComponent() {
      this.compKey +=1
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