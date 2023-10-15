import style from './CardDetalles.module.css'

const CardDetalles = () => {

  return (
    <section className='mt-10'>
        
        <div className={style.packCard}>
          <div className={style.banner}>
            <span className={style.bannerTag}>Detalles</span>
          </div>
    
          <div className={style.lists}>
            <div class={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Recuerda enviar el voucher de pago al <strong>+51 924169968</strong>. Una vez verificado, se te buscará un equipo inmediatamente.</span>
            </div>
            <div class={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Si eres de <strong>Perú</strong>, solo deberás pagar <strong>50 soles</strong> por <strong>promoción</strong>.</span>
            </div>
           
            
        </div>

      </div>
    </section>
  )
}

export default CardDetalles