
# REACT İle Rick-And-Morty 

### Bu proje [Figma](https://www.figma.com/file/yG06KXDlMRs1dPMmuWG1e8/viravira.co---Frontend-Developer-Task-(Rick-and-Morty)?type=design&node-id=0-1&mode=design&t=JHMwFi0WJ8aQvBP4-0) tasarımını React kullanarak bir web uygulamasına dönüştürmek ve [GraphQL API](https://rickandmortyapi.com/graphql)'si üzerinden verileri çekerek bu verileri tasarımda göstermektir.


* **Projenizin amacı aşağıdaki unsurları içerir**
  - Tasarımın uygulamaya dönüştürülmesi: Figma tasarımınızı React kullanarak gerçek bir web uygulamasına dönüştürmek.
  - Verileri getirmek: GraphQL API'si üzerinden verileri çekmek için uygun querileri kullanmak
  - Verilerin gösterilmesi: Çekilen verileri kullanarak uygulamada karakterlerin, lokasyonların veya diğer veri öğelerinin detaylarını göstermek. Örneğin, karakterlerin isimlerini, resimlerini, statülerini, türlerini vb. göstermek için verileri tasarıma uygun şekilde yerleştirmek.

---

<img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-PNG-HD-Quality.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="60%" height="auto" />

## Bu Projedeki  API Kullanımı


#### Api Bağlantısı

```http
  https://rickandmortyapi.com/graphql
```


| Operasyon                          | Parametreler                                      | Açıklama                                                          |
| :--------------------------------- | :----------------------------------------------- | :---------------------------------------------------------------- |
| `character(id: ID!)`               | `id: ID!`                                        | Belirli bir karakteri ID'ye göre getirir.                           |
| `location(id: ID!)`                | `id: ID!`                                        | Belirli bir lokasyonu ID'ye göre getirir.                            |
| `locations(page: Int, filter: FilterLocation)` | `page: Int`, `filter: FilterLocation`           | Tüm lokasyonların listesini getirir.                                |

- `character(id: ID!)` operasyonu, belirli bir karakterin ID'sine göre karakter bilgilerini getirir.
- `location(id: ID!)` operasyonu, belirli bir lokasyonun ID'sine göre lokasyon bilgilerini getirir.
- `locations(page: Int, filter: FilterLocation)` operasyonu, sayfalama ve filtreleme seçenekleriyle tüm lokasyonların listesini getirir.

## Projedeki Queriler


* ### Lokasyon Querileri
     - #### Lokasyonu id'sine göre getirir.


    | Parametre | Tip     | Açıklama           |
    | :-------- | :------ | :----------------- |
    | `$id`     | `ID!`   | **Gerekli**. Lokasyonun ID'si |

    ---

     - #### Bütün Lokasyonları getirir.

    | Parametre | Tip           | Açıklama                              |
    | :-------- | :------------ | :------------------------------------ |
    | `$page`   | `Int!`        | **Gerekli**. Sayfa numarası            |
    | `$filter` | `FilterLocation` | Filtreleme seçenekleri (isteğe bağlı) |

    
* ### Karakter Querileri

    - #### Karakteri id'sine göre getirir.

    | Parametre | Tip        | Açıklama                          |
    | --------- | ---------- | --------------------------------- |
    | `id`      | `ID!`      | **Gerekli**. Karakter ID'si       |


## Kullanılan Teknolojiler
 
### Bu proje için kullanılan teknolojiler aşağıdaki gibidir:

**UI ve Komponent Geliştirme:**
- [React](https://react.dev): Kullanıcı arayüzü ve bileşenleri oluşturma için kullanılan JavaScript kütüphanesi.
- [React DOM](https://www.npmjs.com/package/react-dom): React uygulamasını HTML DOM'a bağlamak için kullanılan paket.
- [React Router DOM](https://github.com/remix-run/react-router): React uygulamasında yönlendirme işlemlerini gerçekleştirmek için kullanılan paket.
- [Styled Components](https://github.com/styled-components/styled-components): React bileşenlerine özel CSS-in-JS çözümü sağlayan paket.
- [Bootstrap 4.6.2](https://getbootstrap.com/docs/4.6/getting-started/introduction/): HTML ve CSS tabanlı tasarım kütüphanesi.

**Veri Yönetimi ve API İletişimi:**
- [GraphQL Request](https://www.npmjs.com/package/graphql-request): GraphQL API'sine HTTP istekleri yapmak için kullanılan paket.

**Stil ve Tasarım:**
- Sass: CSS'in yazımını geliştiren ve daha düzenli hale getiren bir CSS önprosesörü.

**Diğer:**
- TypeScript: JavaScript'in statik tip kontrolünü sağlayan bir programlama dili.
---

## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
   gh repo clone Mstfucrr/React-Rick-And-Morty
```

Proje dizinine gidin

```bash
  cd project_name
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Build edin
```bash
  npm run build
```

Projeyi çalıştırın

```bash
  npm run start
```
Ve tarayıcıda görüntülemek için **http://localhost:3000** açın.


## Ekran Görüntüleri 
  <h3> WEB </h3>
<div>
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/eedb3bda-9c8d-4822-8008-3c7ded77ca83" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="40%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/4c1be8af-750f-4dce-b306-84aba6fb4d4a" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="40%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/734e4bb4-9040-4f46-bfdf-0919e20b8e1e" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="40%" height="auto" /
</div>
  <h3> MOBİLE </h3>
<div>

  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/84e09f0c-9e69-4ee5-be87-436417dcb056" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="33%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/cd0ca3d1-781b-4172-80a0-c0027e263521" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="33%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/51cce556-59dc-4ed6-85fb-9776bf9cf45b" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="33%" height="auto" />
</div>

