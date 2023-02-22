# STextSlide

Easy text slide for Vue

![alt text](https://github.com/Shan-CL/STextSlide/blob/master/text-slide-demo.gif?raw=true)


## Installation

Install STextSlide with npm

```bash
  npm i stextslide
```
    
## Usage/Examples

```html
<STextSlide :words="words" :time="3000">
```
```javascript
import { STextSlide } from 'stextslide'

export default {
    components:{
        STextSlide
    },
    data(){
        return{
            words:[
                { text: 'Text 1', color: '#F44336' },
                { text: 'Text 2', color: '#2196F3' },
                { text: 'Text 3', color: '#FFC107' }
            ]
        }
    }
}
```



## Props

| name    | type   | default | description                          |
| :---   | :---  | :---   | :---                            |
| words   | array of word {text: required, color: optional }  | []    | Array of word                        |
| time    | number | 3000    | Time of word interval in miliseconds |
| transition | string | default | Slide transition, can be default, slide-top-bottom, slide-bottom-top, slide-left-right, slide-right-left |

## License

[MIT](https://choosealicense.com/licenses/mit/)
