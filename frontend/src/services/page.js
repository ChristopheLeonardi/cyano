import axios from 'axios';

const apiUrl = 'http://localhost:1337';
const baseUrl = 'http://localhost:8080';

const getFullUrl = (catSlug, slug = "") => {
  console.log(catSlug, slug)
  return `${baseUrl}/${catSlug}/${slug}` 
}
const getApiUrl = (slug) => {
  return apiUrl + slug 
}
const getConfig = async () => {
  const request = axios.get(apiUrl + "/api/config?populate=*");
  return await request.then(response => 
      {
        const resData = response.data.data.attributes
          const config = {
              "logo": apiUrl + resData.logo.data.attributes.url,
              "logo_footer": apiUrl + resData.logo_footer.data.attributes.url,
              "instagram_url": resData.instagra_url,
              "apiUrl" : apiUrl
          }
          return config            
      }
  );
}

const getMenu = async () => {
  const request = axios.get(apiUrl + "/api/navigation/render/1")
  return await request.then(response => {
    const filteredMenu = response.data
    .filter(item => !item.parent) 
    .map(item => ({
      order: item.order,
      id: item.id,
      title: item.title,
      path: item.path,
      component: item.Component,
      child: response.data
        .filter(i => i.parent && i.parent.id === item.id) 
        .map(child => ({
          order: child.order,
          id: child.id,
          title: child.title,
          path: child.path,
          component: child.Component,
        }))
    }));
    filteredMenu["rawMenu"] = response.data

    return filteredMenu
  })
}

const getData = async (slug, id = '') => {
  if(!slug) { return }
  const request = axios.get(`${apiUrl}/api/${slug}/${id}?populate=*` )
  return await request.then(response => {
    return response.data.data
  })
}

export default { 
  getConfig, getMenu, getData, getFullUrl, getApiUrl
};