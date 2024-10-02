import axios from 'axios';

const baseUrl = 'http://localhost:1337';

const getConfig = async () => {
  const request = axios.get(baseUrl + "/api/config?populate=*");
  return await request.then(response => 
      {
        const resData = response.data.data.attributes
          const config = {
              "logo": baseUrl + resData.logo.data.attributes.url,
              "logo_footer": baseUrl + resData.logo_footer.data.attributes.url,
              "instagram_url": resData.instagra_url,
              "baseUrl" : baseUrl
          }
          return config            
      }
  );
}

const getMenu = async () => {
  const request = axios.get(baseUrl + "/api/navigation/render/1")
  return await request.then(response => {

    const filteredMenu = response.data
    .filter(item => !item.parent) 
    .map(item => ({
      order: item.order,
      id: item.id,
      title: item.title,
      path: item.path,
      child: response.data
        .filter(i => i.parent && i.parent.id === item.id) 
        .map(child => ({
          order: child.order,
          id: child.id,
          title: child.title,
          path: child.path
        }))
    }));

    return filteredMenu
  })
}

export default { 
  getConfig, getMenu
};