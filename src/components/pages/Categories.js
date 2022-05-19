import { getAllCategories } from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Categories = () => {

  const categories = useSelector(getAllCategories);

  return (
    <section>
      <h1 className="mb-5">All categories</h1>
      {categories.map(category => (
        <Link to={"/category/" + category} key={category} className="m-3"><Button variant="primary" className="px-5">{category}</Button></Link>
      ))}
    </section>
  )

}
export default Categories;
