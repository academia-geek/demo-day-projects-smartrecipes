import React from 'react'

const Blog = () => {
  return (
    <div>

    <main className="contenedor seccion contenido-centrado">
        <h1>Blog: Zona Salud</h1>

        <article className="entrada-blog">
            <div>
                <img alt='' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1649038093/DemoDay/maxresdefault_oyjgxn.jpg' />
            </div>
            <div>
                <a href="entrada.html" class="texto-blog">
                    <h4 class="texto-blog">Cocina zero-waste: Aprende 3 recetas deliciosas con cáscara de plátano</h4>
                </a>
                    <p class="texto-blog">Escrito el: <span>20/03/2022</span> por: <span>Admin</span> </p>
                    <p class="texto-blog">
                      ¿Te animas a intentar tener una cocina zero-waste? De esta forma podrás comer sano y ayudar al medio ambiente. Por ello, te dejamos hoy estas 3 increíbles recetas preparadas con cáscaras de plátanos.
                    </p>
            </div>
        </article>

        <article class="entrada-blog">
            <div>
                <img alt='' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1649039514/DemoDay/_109785495_0a.gettyimages-1141690899_mlaxxf.jpg' />
            </div> 
            <div>
                <a href="entrada.html" class="texto-blog">
                    <h4 class="texto-blog">Consejos nutricionales para dormir y descansar mejor</h4>
                </a>
                    <p class="texto-blog">Escrito el: <span>02/04/2022</span> por: <span>Admin</span> </p>
                    <p class="texto-blog">
                      Si últimamente sientes mucho cansancio en el día o piensas que no estás durmiendo correctamente, presta atención a estos consejos nutricionales para descansar mejor por las noches.
                    </p>
            </div>
        </article>

        <article class="entrada-blog">
            <div>
                <img alt='' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1649039347/DemoDay/alimentos-frigorifico_ccjatt.jpg'/>
            </div>
            <div>
                <a href="entrada.html" class="texto-blog">
                    <h4 class="texto-blog">Alimentos que no necesitan refrigeración</h4>
                </a>
                    <p class="texto-blog">Escrito el: <span>30/03/2022</span> por: <span>Admin</span> </p>
                    <p class="texto-blog">
                      Alimentos que no necesitan refrigeración. Porque es muy importante que reservemos ese espacio para lo que realmente lo requiera.
                    </p>
            </div>
        </article>

        <article class="entrada-blog">
            <div>
                <img alt='' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1649039244/DemoDay/recetas-divertidas-para-ni%C3%B1os-1_qzque0.jpg' />
            </div> 
            <div>
                <a href="entrada.html" class="texto-blog">
                    <h4 class="texto-blog">4 tips saludables para organizar tus menús semanales</h4>
                </a>
                    <p class="texto-blog">Escrito el: <span>20/12/2021</span> por: <span>Admin</span> </p>
                    <p class="texto-blog">
                        A continuación, te sugerimos algunas herramientas fáciles de aplicar en el día a día, que nos ayudarán a alcanzar nuestros objetivos nutricionales.
                    </p>
            </div>
        </article>

    </main>

    </div>
  )
}

export default Blog