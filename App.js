import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView , TouchableOpacity, FlatList, Modal, TextInput, AsyncStorage} from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import TaskList from './src/components/TaskList';
import * as Animatable from "react-native-animatable"

const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {

  const [task, setTask] = useState([])
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")

  // BUSCANDO TODAS AS TAREFAS AO INICIAR O APP
  useEffect(() => {
    async function loadTasks(){
      const taskStorage = await AsyncStorage.getItem("@task")
      if(taskStorage){
        setTask(JSON.parse(taskStorage))
      }
    }

    loadTasks()
  }, [])

  // SALVANDO CASO TENHA ALGUMA TAREFA ALTERADA
  useEffect(() => {
    async function saveTask(){
      await AsyncStorage.setItem("@task", JSON.stringify(task))
    }

    saveTask()
  }, [task])

  function handleAdd(){
    if(input === "") return

    const data = {
      key: input,
      task: input,
    }

    const handelDelete = useCallback((data) => {
      const find = task.filter(r => r.key !== data.key)
      setTask(find)
    })

    setTask([...task, data])
    setOpen(false)
    setInput("")
  }

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor='#171d31' barStyle="light-content" />

       <View>
        <Text style={styles.title}>minhas tarefas</Text>
      </View>

      <FlatList
      marginHorizontal={10}
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={(item) => String(item.key) }
      renderItem={({item}) => <TaskList data={item} handelDelete={handelDelete}/>}
      />

      <Modal animationType='slide' transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-arrow-back' size={40} color="#fff"/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Nova Tarefa</Text>
          </View>

          <Animatable.View animation="fadeInUp" useNativeDriver style={styles.modalBody}>
            <TextInput value={input} onChangeText={(texto) => setInput(texto)} multiline={true} placeholderTextColor="#747474" autoCorrect={false} placeholder='O que precisa faser Hoje' style={styles.input}/>

          <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
            <Text style={styles.handleAddText}>Cadastrar</Text>
          </TouchableOpacity>

          </Animatable.View>

        </SafeAreaView>
      </Modal>

      <AnimatableBtn style={styles.fab} useNativeDriver animation="bouceInUp" duration={1500} onPress={() => setOpen(true)}>
        <Ionicons name='ios-add' size={35} color="#fff"/>
      </AnimatableBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    color: "white"
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#094ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width:1,
      height: 3,
    }
  },
  modal: {
    flex: 1,
    backgroundColor: "#171d31",
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  modalTitle: {
    marginLeft: 15,
    color: "white",
    fontSize: 23
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 9,
    height: 85,
    textAlignVertical: "top",
    color: "black",
    borderRadius: 5,
  },
  handleAdd: {
    backgroundColor: "white",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5
  },
  handleAddText: {
    fontSize: 20,
  }
});
