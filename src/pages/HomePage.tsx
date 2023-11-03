import { Button, TextField } from '@mui/material'
import { useDemo } from '../redux-store/demoHooks';

export function HomePage() {
  
  const demo = useDemo();

  return (
    <>
      <h1>Demo App</h1>
      <table>
        <tbody>
        {demo.itemList.map((item, listIndex) => (
            <tr key={listIndex}>
                <td>
                <p>Total: {item.reduce((acc, value) => acc + value, 0)}</p>
                <table>
                    <tbody>
                    {item.map((value, itemIndex) => (
                        <tr key={`${listIndex}_${itemIndex}`}>
                            <td>
                                <div className="card">
                                <TextField label="Value" value={value}
                                    onChange={(event) => {
                                        const newValue = +event.target.value;
                                        demo.updateValue(newValue, listIndex, itemIndex);
                                    }}>
                                </TextField>
                                <TextField label="Calculated" disabled={true} value={demo.calculatedValues[listIndex][itemIndex]}>
                                </TextField>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <hr/>
                <Button onClick={() => demo.insertValueIntoList(listIndex)}>Add new item to section</Button>
                </td>
            </tr>
        ))}
        </tbody>
      </table>
      <hr/>
      <Button onClick={() => demo.insertNewList()}>Add new section</Button>
    </>
  )
}

