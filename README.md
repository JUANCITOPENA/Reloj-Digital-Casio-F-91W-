# 🕰️ Reloj Digital Casio F-91W - Proyecto Open Source

## 🚀 Bienvenido al Proyecto de Reloj Digital

¡Gracias por visitar este repositorio! Este proyecto es un homenaje al icónico reloj Casio F-91W, recreado con tecnologías web modernas.

### 🌟 ¡Apoya el Proyecto!

Si te gusta este proyecto, ¡por favor dale una estrella (★) en el repositorio! Cada estrella nos motiva a seguir mejorando y compartiendo código.

### 🤝 Cómo Contribuir

¡Las contribuciones son bienvenidas! Puedes ayudar de varias formas:

1. **Reporta Errores**: Abre un issue si encuentras algún problema
2. **Sugiere Mejoras**: Comparte tus ideas para nuevas características
3. **Haz un Fork**: Modifica y mejora el proyecto
4. **Comparte**: Difunde el proyecto en tus redes sociales

### 💡 Características

- Diseño casi fiel al Casio F-91W original (Un poco de Creatividad)
- Reloj digital funcional
- Responsive y multiplataforma
- Código limpio y bien documentado

### 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript
- Responsive Design

### 📞 Contacto y Redes Sociales

¡Sígueme y mantente conectado!

1. 🎬 **YouTube**: [@JuancitoPenaV](https://www.youtube.com/@JuancitoPenaV)
2. 👨‍💼 **LinkedIn**: [Juancito Peña](https://www.linkedin.com/in/juancitope%C3%B1a/)
3. 📷 **Instagram**: [@juancito.pena.v](https://www.instagram.com/juancito.pena.v/)
4. 📑 **Facebook**: [Juancito Peña V](https://www.facebook.com/juancito.p.v)
5. 🐦 **Twitter**: [@JuancitoPenaV](https://twitter.com/JuancitoPenaV)

### 📄 Licencia

Este proyecto está bajo [MIT]

### 🎉 ¡Gracias por tu Apoyo!

¡Espero que disfrutes este proyecto tanto como yo disfruté creándolo! 

⭐ No olvides darle una estrella al repositorio

# 🚀 Manual de Instalación y Configuración del Reloj Casio F-91W Digital

Este manual te guiará a través del proceso completo para crear y ejecutar el proyecto del reloj digital inspirado en el Casio F-91W usando HTML, CSS y JavaScript.

## 📋 Requisitos Previos

- **Editor de Código**: Se recomienda usar Visual Studio Code o cualquier otro editor de tu preferencia.
- **Navegador Web**: Chrome, Firefox, Edge, etc.
- **Conocimientos Básicos** en HTML, CSS y JavaScript.

## 📁 Paso 1: Crear el Entorno de Trabajo

Crea una carpeta para tu proyecto. 

Por ejemplo: `reloj-casio-f91w`

Abre la carpeta en tu editor de código.

> 💡 **Nota**: Organizar tus archivos en carpetas facilita el mantenimiento del proyecto.

## 📝 Paso 2: Crear los Archivos del Proyecto

Dentro de la carpeta del proyecto, crea los siguientes archivos:

- `index.html`
- `style.css`
- `script.js`

La estructura de carpetas debería verse así:

```
reloj-casio-f91w/
├── index.html
├── style.css
└── script.js
```

## 📄 Paso 3: Contenido del Archivo index.html

Copia y pega el siguiente código en `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reloj Casio F-91W</title>
  <!-- Enlazamos el archivo CSS -->
  <link rel="stylesheet" href="style.css">
  <!-- Fuentes digitales para mejorar el diseño 💻 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Estructura principal del reloj 🕒 -->
  <div class="watch">
    <!-- Correa superior -->
    <div class="strap strap-top">
      <div class="ridge"></div>
      <div class="ridge"></div>
    </div>
    <!-- Caja del reloj -->
    <div class="case">
      <!-- Etiquetas (Labels) 🔖 -->
      <div class="label label-brand">CASIO</div>
      <div class="label label-model">F-91W</div>
      <div class="label label-light"><span class="arrow">◀</span> LIGHT</div>
      <div class="label label-alarm-chrono">ALARM CHRONOGRAPH</div>
      <div class="label label-mode"><span class="arrow">◀</span> MODE</div>
      <div class="label label-alarm-onoff">ALARM ON-OFF/24HR <span class="arrow">▶</span></div>
      <div class="label label-water">WATER</div>
      <div class="label label-wr">WR</div>
      <div class="label label-resist">RESIST</div>

      <!-- Pantalla del reloj 📟 -->
      <div class="screen-border">
        <div class="screen">
          <div class="display">
            <div class="top-row">
              <span class="day" id="day">WE</span>
              <span class="date" id="date">26/07/21</span>
            </div>
            <div class="time-row">
              <span class="indicator-pm"></span> <!-- Indicador PM (si se usa 12H) -->
              <span class="indicator-24h">24H</span>
              <span class="hours" id="hours">19</span>
              <span class="colon">:</span>
              <span class="minutes" id="minutes">55</span>
              <span class="seconds" id="seconds">21</span>
            </div>
            <div class="indicators">
              <!-- Indicadores adicionales (por ejemplo, alarma) -->
            </div>
          </div>
        </div>
      </div>

      <!-- Botones del reloj 🔘 -->
      <div class="button button-left-top"></div>
      <div class="button button-left-bottom"></div>
      <div class="button button-right"></div>
    </div>
    <!-- Correa inferior -->
    <div class="strap strap-bottom">
      <div class="ridge"></div>
      <div class="ridge"></div>
      <div class="ridge"></div>
    </div>
  </div>
  <!-- Enlazamos el archivo JavaScript -->
  <script src="script.js"></script>
</body>
</html>
```

> 💬 **Comentario**: 
> El HTML define la estructura visual del reloj, dividiendo la interfaz en correas, caja, pantalla y botones.

## 🎨 Paso 4: Contenido del Archivo style.css

Copia y pega el siguiente código en `style.css`:

```css
/* 🔄 Reset básico y estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #4a5568; /* Fondo */
  font-family: Arial, sans-serif; /* Fuente de respaldo */
}

/* ⌚ Estilos Generales del Reloj */
.watch {
  position: relative;
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1.3);
}

/* Resto del CSS... (abreviado por longitud) */
```

> 💬 **Comentario**: 
> El CSS define la apariencia visual del reloj, incluyendo colores, fuentes, sombras y posicionamiento de cada elemento.

## 💻 Paso 5: Contenido del Archivo script.js

Copia y pega el siguiente código en `script.js`:

```javascript
// 🔄 Función para actualizar el reloj cada segundo
function updateClock() {
  const now = new Date();

  // 🕒 Obtener hora, minutos y segundos con dos dígitos
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // 📅 Obtener día, mes y año en formato DD/MM/AA
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yy = String(now.getFullYear()).slice(-2);

  // 🔤 Abreviación del día de la semana
  const dias = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  const dayAbbrev = dias[now.getDay()];

  // 🖥️ Actualizar elementos de la pantalla
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('date').textContent = `${dd}/${mm}/${yy}`;
  document.getElementById('day').textContent = dayAbbrev;
}

// ⏱️ Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
// 🔥 Inicializar el reloj al cargar la página
updateClock();
```

> 💬 **Comentario**: 
> Este JavaScript se encarga de actualizar dinámicamente la hora y la fecha en la pantalla. 
> Utiliza la función `setInterval` para refrescar la información cada 1000 ms (1 segundo).
> Se formatean los valores para que siempre se muestren con dos dígitos.

## 🚀 Paso 6: Ejecutar el Proyecto

1. Guarda todos los archivos en la misma carpeta.
2. Abre el archivo `index.html` en tu navegador (puedes hacer doble clic en él o abrirlo desde el navegador usando Archivo > Abrir).

> 💡 **Consejo**:
> Si haces cambios en el código, guarda el archivo y recarga la página en el navegador para ver los resultados actualizados.

## 🔧 Palabras Claves y Conceptos

- **HTML**: Estructura básica del reloj.
- **CSS**: Estilizado visual, diseño y posicionamiento de elementos.
- **JavaScript (JS)**: Lógica para actualizar el reloj en tiempo real.
- **Casio F-91W**: Inspiración del diseño del reloj.
- **Responsive**: Asegura que el reloj se vea bien en distintos dispositivos.

## 🎉 ¡Listo para Usar!

Con estos pasos, ya tendrás un reloj digital inspirado en el Casio F-91W funcionando en tu navegador. Si deseas modificar o extender funcionalidades, puedes editar el HTML, CSS o JS según tus necesidades.

