function aleatorio(min = 0, max = 3){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string'){
        reject('ERRO')
        return
      }

      resolve(msg.toLocaleUpperCase() + ' - Passei')
    }, tempo);
  })
}

/* 
esperaAi('fase 1', aleatorio())
  .then(valor => {
    console.log(valor)
    return esperaAi('Fase 2', aleatorio())
  })
  .then(fase => {
    console.log(fase)
    return esperaAi('Fase 3', aleatorio())
  })
  .then(fase => {
    console.log(fase)
    return fase
  })
  .then(fase => {
    console.log('Terminamos na fase', fase)
  })
  .catch(e => console.log(e)) 
  */
 async function executa(){
  try{
  let fase1 = await esperaAi('Fase 1', aleatorio())
  console.log(fase1)

  let fase2 = await esperaAi('Fase 2', aleatorio())
  console.log(fase2)

  let fase3 = await esperaAi('Fase 3', aleatorio())
  console.log(fase3)

  console.log('fim', fase3)

  } catch(e){
    console.log(e)

 }
 }

 executa()