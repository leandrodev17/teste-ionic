# Projeto Ionic

Este projeto é uma aplicação híbrida desenvolvida com [Ionic Framework](https://ionicframework.com/). Siga as instruções abaixo para configurar e rodar o projeto em seu ambiente local.

## Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas:

- [Node.js]
- [Ionic CLI] - instale globalmente
- [Android Studio](https://developer.android.com/studio) - para rodar no Android
- [Xcode](https://developer.apple.com/xcode/) - para rodar no iOS - apenas em macOS

## Instalação do Ionic CLI

Se ainda não tiver o Ionic CLI instalado, você pode instalá-lo globalmente com o seguinte comando em seu prompt de comando:

npm install -g @ionic/cli

## Instalação das dependência

npm install

## Para iniciar o servidor e ter acesso ao app web

ionic serve

----------------------------------------------------------------

## Configurações para Google Auth e Firebase

Acesse a pasta environment e em abos os arquivos e substitua as variaveis por suas credenciais 

clientID: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com',
  firebase: {
    apiKey: 'XXXXXXXXXXXXXXXXXXXZ_ZsWLfoa9BAHKss',
    authDomain: 'XXXXXXXXXXX.firebaseapp.com',
    projectId: 'XXXXXXXXXXX',
    storageBucket: 'XXXXXXXXXXXXXXXXX',
    messagingSenderId: 'XXXXXXXXXXX',
    appId: 'XXXXXXXXXXXXXXXXXXXbe988c7546e9b487',
  },

Também substitua as variáveis por suas credenciais no arquivo index.html, no caso a client_id. Arquivo dentro da pasta src

 <meta
      name="google-signin-client_id"
      content="XXXXXXXXXXXXXXXXXXXapps.googleusercontent.com"
 />

 Substitua também a mesma variável client_id no arquivo capacitor.config.ts na raiz do projeto

const config: CapacitorConfig = {
  appId: 'com.testeionic.teste',
  appName: 'teste_ionic',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '455411327750-f6a7e2a0msj77bk3nj7nb5srab77j5c6.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  }
};

## Observação: 
Ao criar um aplicativo Android no firebase se tem acesso ao arquivo google-services.json, esse arquivo precisa ser inserido na pasta android/app. Esse arquivo é necessario para as Push Notifications

Com essas configurações o projeto já estará pronto para teste!
