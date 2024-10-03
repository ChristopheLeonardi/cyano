import { useState, useEffect } from "react";
import pageServices from "../../services/page"
import PropTypes from 'prop-types';
import {Title, Card} from "../blocks/Elements";

const GridPage = ({data}) => {
  const [pageData, setPageDate] = useState(null)
  useEffect(() => {

    if (!data) {return}

    pageServices.getData(data.path)
      .then(res => {
        setPageDate(res)
      })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
  }, [data])
  return (
    <>
    <Title title={data.title} description={data.description}/>
    <section className="card-container">
    { pageData && pageData.map( item => {
      return <Card key={item.id} data={item}/>

    })}
    </section>
    </>
  )
}
GridPage.propTypes = {
  data: PropTypes.any.isRequired,
};
export default GridPage;