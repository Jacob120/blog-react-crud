import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from './PostForm';
import { getPostById } from '../../redux/postsRedux';

const EditPostForm = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  const postData = useSelector(state => getPostById(state, id));

  console.log('postdata-edit', id);

  let navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(editPost({...post, id}));
    navigate('/')
  };

  return (
   <PostForm action={handleSubmit} actionText="Edit post" props={postData}/>
  );
};

export default EditPostForm;