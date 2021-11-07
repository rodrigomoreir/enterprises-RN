import React, {useState} from 'react';
import { 
  TouchableOpacity,
  Text,
} from 'react-native';
import { getStyles } from './Filter.style'
import ModalFilterPicker from 'react-native-modal-filter-picker'

interface Props {
  filterName: string[]
  filterId: number[]
}

const Filter: React.FC<Props> = (filterName, filterId) => {
  const styles = getStyles()
  const [visible, setVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('')

  const handleFilter = () => {
    setVisible(true)
  }

  const filterSelected = (filter) => {
    setSelectedFilter(filter)
    setVisible(false)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
        <Text style={styles.textFilter}>Filtro</Text>
      </TouchableOpacity>
      <ModalFilterPicker 
        visible={visible}
        onSelect={filterSelected}
        onCancel={handleCancel}
        options={[filterId, filterName]}
      />
    </>
  )
}

export default Filter;
