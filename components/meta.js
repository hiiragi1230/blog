import Head from "next/head"
import  {useRouter} from "next/router"
//サイトに関する情報
import { siteMeta } from "lib/constants"
import siteImg from "images/ogp.jpg"

const{siteTitle,siteDesc,siteUrl,siteLocale,siteType,siteIcon,}=siteMeta


export default function Meta({pageTitle,pageDesc, pageImg,pageImgW,pageImgH}){
  const title = pageTitle ? `${pageTitle}|${siteTitle}`:siteTitle
  const desc = pageDesc ?? siteDesc

  const router =useRouter()
  const url =`${siteUrl}${router.asPath}`

  //OGP画像
  const img = pageImg ||siteImg.src
  const imgW = pageImgW ||siteImg.width
  const imgH = pageImgH ||siteImg.heigth
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`

  return(
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og.description" content={desc}/>
      <link rel="canonical"href={url}/>
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:tyle" content={siteType}/>
      <meta property="og:locale" content={siteLocale}/>
      <link rel="icon" href={siteIcon}/>
      <link rel="apple-touch-icon" href={siteIcon}/>

      <mete property="og:image" content={imgUrl}/>
      <mete property="og:image:width" content={imgW}/>
      <mete property="og:image:higth" content={imgH}/>
      <mete name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}