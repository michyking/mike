// ❌ This will not work if the array can be sorted or filtered
{arr.map((value, index) => <Home details={value} key={index} />)}

// ✔️ You must use a unqie ID in this case
{arr.map(value => <Home details={value} key={value.id} />)}

// ✔️ You can also use the uuid package
import { v4 } from 'uuid'

{arr.map(value => <Home details={value} key={v4()} />)}