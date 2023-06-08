import React from 'react';
import { Header } from '../../components/TodoHeader';
import { Title } from '../../components/Title';
import { Search } from '../../components/Search';
import { List } from '../../components/List';
import { Item } from '../../components/Item';
import { Loading } from '../../components/Loading'
import { ButtonNewTask } from '../../components/ButtonNewTask';
import { useTasks } from '../../hooks/useTasks';
import { Empty } from '../../components/Empty';
import { ChangeAlert } from '../../components/ChangeAlert'
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
