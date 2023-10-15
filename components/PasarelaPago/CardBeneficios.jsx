import style from './CardBeneficios.module.css'

const CardBeneficios = () => {

    

  return (
    <section className='mt-10'>
        
        <div className={style.packCard}>
          <div className={style.banner}>
            <span className={style.bannerTag}>Beneficios</span>
          </div>
          {/* <div className={style.packName}>Beneficios</div> */}

          <p className={style.description}>Durante los próximos 2 meses con Mr. Developer, obtendrás:</p>

          <div className={style.lists}>
            <div class={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Experiencia práctica construyendo proyectos.</span>
            </div>
            <div class={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Red de contactos y habilidades blandas.</span>
            </div>
            {/* <div class={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Habilidades blandas.</span>
            </div> */}
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Perfil profesional en GitHub, CV, LinkedIn y portafolio.</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>

              <span>Reclutadores empresariales conocerán tu trabajo.</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>

              <span>Listado de portales de empleo.</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>

              <span>Pack de pruebas técnicas.</span>
            </div>
            
        </div>
        {/* <div className={style.bottom}>
          <div className={style.priceContainer}>
            <span className={style.devise}>$</span>
            <span className={style.price}>15</span>
            <span className={style.date}>(único-pago)</span>
          </div>
          <button onClick={handlePostOrder} className={style.btn} href="#">Pagar con Paypal</button>
        </div> */}
      </div>
    </section>
  )
}

export default CardBeneficios