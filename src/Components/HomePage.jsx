import React from 'react';
import { Header } from './TodoHeader';
import { Title } from './Title';
import { Search } from './Search';
import { List } from './List';
import { Item } from './Item';
import { Loading } from './Loading'
import { ButtonNewTask } from './ButtonNewTask';
import { useTasks } from './useTasks';
import { Empty } from './Empty';
import { ChangeAlert } from './ChangeAlert'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function HomePage(){

  const navigate = useNavigate();
  const { searchId } = useParams();

  const { states, setStates } = useTasks(searchId);

  const {
    searchState,
    loading,
    error,
    sincronize,
    allTasks,
    finalizedTasks,
    filtedTasks,
    specialSearch
  } = states;

  const {
    createTask,
    setSearchState,
    toggleCompleteTask,
    deleteTask,
    reSincronize,
    setSpecialSearch,
  } = setStates;



  return(
    <React.Fragment>
      <Header loading={loading}>
        <Title allTasks={allTasks} finalizedTasks={finalizedTasks}/>
        <Search setSearchState={setSearchState} searchState={searchState} specialSearch={specialSearch} setSpecialSearch={setSpecialSearch} searchId={searchId}/>
      </Header>
      <List
        onLoading={() => <Loading />}
        onEmpty={() => <Empty />}
        onEmptySearch={(searchText) => <p>There is no results for {searchText}</p>}
        allTasks={allTasks}
        error={error}
        loading={loading}
        searchId={searchId}
        filtedTasks={filtedTasks}
        searchState={searchState}
        sincronize={sincronize}
        render={element => (
          <Item
            id={element.id}
            text={element.text}
            completed={element.completed} key={element.id} toggleCompletedTask={() => toggleCompleteTask(element.id)}
            deleteTask={() => deleteTask(element.id)}
            editTask={() => navigate(`/edit/${element.id}`, {
              state: {
                element,
              }
            })}
            />)}
      >
      </List>
      {/* {!!toggleModal && (
        <Transporter>
          <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} createTask={createTask}/>
      </Transporter>
      )} */}
    <ButtonNewTask createTask={createTask} onClick={() => navigate('/new/')}/>
    <ChangeAlert reSincronize={reSincronize}/>
    </React.Fragment>
  )
}

export { HomePage }
