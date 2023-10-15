import style from './CardPrincipal.module.css'

const CardPrincipal = () => {

  return (
    <section className=''>
        
        <div className={style.packCard}>
          <div className={style.banner}>
            <span className={style.bannerTag}>Costo Total</span>
          </div>
          {/* <div className={style.packName}>Beneficios</div> */}

          <p className={style.description}>Único pago por las 8 semanas.</p>

        <div className={style.bottom}>
          <div className={style.priceContainer}>
            <span className={style.devise}>$</span>
            <span className={style.price}>15.00</span>
            <span className={style.date}>(antes $30.00)</span>
          </div>
          {/* <button onClick={handlePostOrder} className={style.btn} href="#">Pagar con Paypal</button> */}
        </div>
      </div>
    </section>
  )
}

export default CardPrincipal