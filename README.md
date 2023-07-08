
# REACT İLE RICK AND MORTY 

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
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/98c222b8-23f2-4c55-8eb8-e5f41014ff57" width="60%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/81d792e4-1d94-4465-8209-d5169819e73d" width="60%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/8615c3b8-9e7d-422c-8868-e43e7543b722" width="60%" height="auto" />
</div>
  <h3> MOBİLE </h3>
<div>
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/474eda3d-b51d-40ba-aede-af3d73af4552" width="33%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/8ce6f803-6fdd-42d0-8731-610fbd58645e" width="33%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/bfbc808e-3f88-4504-975c-35a91feb4b7a" width="33%" height="auto" />
</div>

