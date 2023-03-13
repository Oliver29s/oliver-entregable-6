const confi = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
export const focusBLur = () =>{
    window.addEventListener('focus', () => document.title = 'E-commerce | Academlo')
    window.addEventListener('blur', () =>document.title =  '¡Vuelve! ¡No te Vayas!')
}
  export default confi