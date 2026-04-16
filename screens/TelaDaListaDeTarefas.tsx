import { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Input from '../components/Input'
import ListaDeTarefas from '../components/ListaDeTarefas'

export default function TelaDaListaDeTarefas() {
    const [tarefa, setTarefa] = useState<string>('')
    const [tarefas, setTarefas] = useState<string[]>([])
    const adicionarTarefa = () => {
        if (tarefa.trim()) {
            setTarefas([...tarefas, tarefa])
            setTarefa('')
        }
    }
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <Input value={tarefa} onChange={setTarefa}

placeholder="Informe a tarefa" />

<Button title="Adicionar" onPress={adicionarTarefa} />
<ListaDeTarefas tarefas={tarefas} />
</View>

)
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})