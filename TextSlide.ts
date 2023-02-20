import './STextSlide.scss'

import { VNode } from 'vue'
import { VNodeData } from 'vue'

export default {
    name: 's-text-slide',
    props:{
        words:{
            type:Array,
            default: () => { return []}
        },
        time:{
            type:Number,
            default: 3000
        },
        transition:{
            type: String,
            default: 's-default'
        }
    },
    computed:{
        styles:function(){
            return (this.words[this.wordIndex].color) ? `color:${this.words[this.wordIndex].color};` : ''
        }
    },
    mounted(){
        let _this = this
        this.wordInterval = setInterval(function(){
            let nextIndex = (_this.wordIndex < _this.words.length - 1) ? _this.wordIndex + 1 : 0
            _this.isActive = false
            setTimeout(function(){
                _this.wordIndex = nextIndex
                _this.isActive = true
            }, 500);
        }, (this.time > 500) ? this.time : 1000)
    },
    data(){
        return{
            wordInterval: null,
            wordIndex:0,
            isActive:true,
        }
    },
    methods:{
        createSlide(): VNode{
            let data: VNodeData = {
                class: {
                    'in': this.isActive
                },
                staticClass: `s-word-slide s-${this.transition}--transition`,
                style: this.styles
            }
            return this.$createElement('div', data, this.words[this.wordIndex].text)
        },
    },
    render(){
        const render = this.createSlide()
        return render
    }
}