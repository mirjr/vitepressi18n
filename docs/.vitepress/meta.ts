/** basic site info */
export const name = 'Vite i18n'
export const site = 'https://cz-git.qbb.sh'
export const siteCN = 'https://cz-git.qbb.sh/zh/'
export const logo = 'https://cz-git.qbb.sh/images/logo.png'
export const keywords = 'internationalization, i18n'
export const descriptionEN
  = 'Just description'
export const descriptionUZ
  = 'Shunchaki tavsif'

/** social links */
export const ogTitle = 'Multilingual site'
export const ogImg = 'https://raw.githubusercontent.com/ilosrim/imgs/master/bio/2022-11-25/complex-2.png'
export const ogImgUZ = 'https://raw.githubusercontent.com/ilosrim/imgs/master/bio/2022-11-25/complex-2.png'
export const github = 'https://github.com/mirjr'
export const twitter = 'https://twitter.com/mirjr17'

/** site search console  */
export const googleVerify = 'j6cNWewUj3QcJBpdv48t67XoDxdlKPQ6dwKgXg9Nigo'
export const baiduVerify = 'code-GZMUSi21Xe'

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')