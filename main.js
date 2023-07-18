
const message = document.querySelector('#message'), btn = document.querySelector('#btn'), list = document.querySelector('.list')

btn.onclick = () => {
  const item=  document.createElement('div')
  item.innerText = message.value
  list.appendChild(item)
  message.value = ''
}


const registerServiceWorker = async () => {
  if("serviceWorker" in navigator){
    const registration = await navigator.serviceWorker.register('sw.js', {scope: '/pwa/'})
    if(registration.installing){
      console.log('正在安装');
    }else if(registration.waiting){
      console.log('已安装');
    }else if(registration.active){
      console.log('已激活');
    }
  }
}

registerServiceWorker()