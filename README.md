# Proyecto de Pruebas Automatizadas - Buggy Cars Rating

## Descripción

Suite de pruebas automatizadas end-to-end para la aplicación web Buggy Cars Rating (https://buggy.justtestit.org/), desarrolladas con Playwright y TypeScript.

## Tecnologías

- Playwright v1.56.1
- TypeScript/JavaScript
- Node.js v18+
- npm

## Instalación

### Prerrequisitos
- Node.js versión 18 o superior
- npm instalado

### Pasos

```bash
# Clonar repositorio
git clone <url-del-repositorio>
cd proyecto-pruebas-automatizadas

# Instalar dependencias
npm install

# Instalar navegadores
npx playwright install
```

## Ejecución de Pruebas

### Comandos Principales

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar con interfaz gráfica
npm run test:headed

# Ejecutar con UI de Playwright
npm run test:ul
```

### Pruebas Específicas

```bash
npm run test:regusu              # Registro de usuario
npm run test:regusuexist         # Registro usuario existente
npm run test:editar              # Editar perfil
npm run test:votauto             # Votar por auto
npm run test:votcarro            # Votar por carro
npm run test:votsinlog           # Votar sin login
npm run test:comprobarvoto       # Verificar voto único
npm run test:incrementovoto      # Incremento de votos
npm run test:comprobartexto      # Texto largo
npm run test:comentario          # Comentario sin nombre
npm run test:expandirimagen      # Expandir imagen
npm run test:limitepag           # Límite paginación
npm run test:limiteinferior      # Límite inferior paginación
npm run test:enlace              # Verificar enlace
```

## Estructura del Proyecto

```
proyecto/
├── tests/
│   ├── registro-usuario.spec.ts
│   ├── registro-usuario-existente.spec.ts
│   ├── editar-perfil.spec.ts
│   ├── votar-carro.spec.ts
│   ├── votar-auto.spec.ts
│   ├── votar-sin-login.spec.ts
│   ├── comprobar-voto-unico.spec.ts
│   ├── comprobar-incremento-voto.spec.ts
│   ├── comprobar-texto-largo.spec.ts
│   ├── comentario-sin-nombre.spec.ts
│   ├── expandir-imagen-carro.spec.ts
│   ├── limite-paginacion.spec.ts
│   ├── limite-inferior-paginacion.spec.ts
│   └── verificar-enlace.spec.ts
├── package.json
├── playwright.config.ts
└── README.md
```

## Áreas Funcionales

### Registro de Usuario
- Registro exitoso de nuevo usuario
- Validación de usuario duplicado

### Actualizar Perfil
- Actualización de First Name y Last Name
- Validación del campo Age
- Validación de límite de caracteres en Address
- Cambio de contraseña

### Votar por Autos
- Votación exitosa por un modelo
- Verificación de voto único
- Incremento del contador de votos
- Validación de comentario largo
- Validación de autenticación requerida

### Navegación
- Verificación de paginación
- Validación de enlaces
- Comportamiento de imágenes

## Resultados

## Bugs Identificados

**Bug Crítico - Comentario sin autor**
- ID: 13
- Área: Votar por Autos
- Descripción: El sistema permite publicar comentarios sin nombre de autor
- Prioridad: Alta
- Archivo: comentario-sin-nombre.spec.ts

## Credenciales de Prueba

**Usuario:**
- Email: cermenosauly8@gmail.com
- Username: saulycermeño
- Password: sauly987AÑ* / Estefania100.

## Reportes

Ver reporte HTML después de ejecutar pruebas:

```bash
npx playwright show-report
```

## Configuración

Archivo `playwright.config.ts`:
- Directorio de pruebas: ./tests
- Ejecución en paralelo
- Navegadores: Chromium, Firefox, WebKit
- Reporte: HTML

## Autor

Estefania Cermeño
cermenosauly8@gmail.com

## Licencia

ISC
