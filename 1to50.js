// https://zzzscore.com/1to50/
function myFunc(){
    i = 0
    num = 1

    target()

    function target(){
        grid = document.querySelectorAll('#grid div')
        while(1){
            if(num>50){
                break
            }else{
                if(grid[i].innerText == num){
                    console.log(`${num}탭`)
                    tapFunc($(grid[i]))
                    num++
                    break;
                }else{
                    i++
                }
            }
        }
    }

    function tapFunc(obj){
        obj.trigger('tap')
        i = 0
        setTimeout(target,25)
    }
}

myFunc()