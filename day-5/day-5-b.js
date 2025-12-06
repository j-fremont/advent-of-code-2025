const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {

  const lines = data.split('\n')

  const ranges = lines.filter(l => l.includes('-')).map(l => l.split('-'))

  const new_ranges = ranges.reduce((acc, r) => {



    if (acc.length==0) {

      acc = [r]

    } else {

      let overlap = false;

      //console.log('==========')

      //console.log(r)
      //console.log(acc)

      acc.forEach((a, i) => {

        if (r[1] < a[0] || r[0] > a[1]) {

          //acc = [...acc, r]

          //console.log("A : " + a)



        } else if (r[0] >= a[0] && r[1] <= a[1]) {

          //console.log("B : " + a)

          overlap=true



        } else {


          if (r[0] < a[0] && r[1] > a[0]) {
            acc[i][0]=r[0]
            //out=true

            //console.log("C : " + a)

            overlap=true
          }

          if (r[0] < a[1] && r[1] > a[1]) {
            acc[i][1]=r[1]
            //out=true

            //console.log("D : " + a)

            overlap=true

          }

        }



      })

      if (!overlap) {

        acc = [...acc, r]
      }

      /*if (!out) {
        acc = [...acc, r]
      }*/






    }

    return acc

  }, [])

  console.log(new_ranges)

  console.log(new_ranges.reduce((acc, r) => {


    acc = acc + (Number(r[1])-Number(r[0])) + 1


    return acc;



  }, 0))







})
