<template>
    <div id="contenedor">
        <section class="ppost-list">
            <div class="pcontent">
                <article class="ppost">
                    <div class="ppost-header">
                        <div class="ppost-img-1"></div>
                    </div>
    
    
                    <div class="ppost-body">
                        <span>fecha de la publiccaion</span>
                        <h2>Este es un subtitulo de la publicacione</h2>
                        <p class="pdescripcion">aqui ponen el texto de la base de datos</p>
                        <a href="/index/subp1.html" class="ppost-link">Leer mas</a>
                    </div>
    
                </article>
    
                <article class="ppost">
                    <div class="ppost-header">
                        <div class="ppost-img-2"></div>
                    </div>
    
    
                    <div class="ppost-body">
                        <span>fecha de la publiccaion</span>
                        <h2>Este es un subtitulo de la publicacione</h2>
                        <p class="pdescripcion">aqui ponen el texto de la base de datos</p>
                        <a href="/index/subp2.html" class="ppost-link">Leer mas</a>
                    </div>
    
                </article>
    
                <article class="ppost">
                    <div class="ppost-header">
                        <div class="ppost-img-3"></div>
                    </div>
    
    
                    <div class="ppost-body">
                        <span>fecha de la publiccaion</span>
                        <h2>Este es un subtitulo de la publicacione</h2>
                        <p class="pdescripcion">aqui ponen el texto de la base de datos</p>
                        <a href="/index/subp3.html" class="ppost-link">Leer mas</a>
                    </div>
    
                </article>
            </div>
        </section>
    
    </div>
</template>
<style scoped>
#contenedor{
    padding-left: 80px;
}
body{
    background:black;
}
h1{
    color: white;
    text-align: center;
}
.ppost-link {
    text-decoration: none;
    padding: 8px 60px;
    background: rgb(252, 243, 243);
    color: black;
    width: 50%;
    margin: auto;
    border-radius: 20px;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, .15);
    transition: .2s;
}
.ppost-list {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 30px 15px;
    
}

.pcontent {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 20px;
    max-width: 1000px;
    margin: auto;
}
.ppost-img-1,.ppost-img-2,.ppost-img-3{
    background: url('@/assets/img/logo.png');
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    transition: .2s;
}
.ppost{
    background: rgb(212, 216, 219);
    box-shadow: 0 1px 6px 1px rgba(0,0,0, .19);
    overflow: hidden;
    transition: .2s;
    border-radius: 18px;

}

.ppost:hover{
    transform: translateY(-4px);
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, .25);
}

.ppost-header{
    width: 100%;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
}

.ppost:hover .ppost-img1,
.ppost:hover .ppost-img1,
.ppost:hover .ppost-img1{
    transform: scale(1.1);
}

.ppost-body{
    padding: 15px;
    text-align: center;
}

.ppost-body span{
    display: inline-block;
    color: rgb(161, 164, 167);
    margin-bottom: 10px;
}

.ppost-body h2{
    margin-bottom: 15px;
}

.ppost-bodyp{
    line-height: 1.5;
    margin-bottom: 20px;
}

.ppost-body .ppost-link{
    display: block;
    text-decoration: none;
    padding: 10px;
    background: rgb(252, 243, 243);
    color: black;
    width: 50%;
    margin: auto;
    border-radius: 20px;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, .15);
    transition: .2s;
}

.ppost-body .ppost-link:hover{
    background: #626668;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, .25);
    transform: translateY(-2px);

}

@media (max-width: 840px ){
    .pcontent{
        grid-template-columns: repeat(2,1fr);
    }
}
@media (max-width: 600px) {
    .pcontent {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>