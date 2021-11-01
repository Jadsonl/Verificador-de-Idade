function verifica(){
  var data =new Date()
  var ano= data.getFullYear()
  var fano= document.getElementById('txtano')
  var res = document.getElementById('res')
  var img= document.createElement('img')
  img.setAttribute('id','foto')
  if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
    var fsex= document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero= ''
    if(fsex[0].checked){
      genero='Homem'
      if(idade >= 0 && idade< 10){
        //criança
        img.setAttribute('src', 'imagens/bebe-menino.png')
      }else if(idade >=10 && idade <21){
        //jovem
        img.setAttribute('src', 'imagens/homem-jovem.png' )
      }else if(iade < 50){
        //adulto
        img.setAttribute('src', 'imagens/adulto-h.png')
      }else{
        //idoso
        img.setAttribute('src', 'imagens/idoso.png')
      }

    }else if (fsex[1].checked){
      genero= 'Mulher'
      if(idade >= 0 && idade< 10){
        //criança
        img.setAttribute('src', 'imagens/bebe-menina.png')
      }else if(idade >=10 && idade <21){
        //jovem
        img.setAttribute('src', 'imagens/mulher-jovem.png' )
      }else if(iade < 50){
        //adulto
        img.setAttribute('src', 'imagens/adulto-m.png')
      }else{
        //idoso
        img.setAttribute('src', 'imagens/idosa.png')
      }
    }
   res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
  res.appendChild(img) 
  }
}