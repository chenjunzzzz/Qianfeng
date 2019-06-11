class Cart{
    constructor(){
        this.storage={};
    }
    common(){
        let _storage;
        if(window.localStorage){
            if(window.localStorage["cart"]) {
                _storage = window.localStorage["cart"];
                _storage = window.eval("(" + _storage + ")");
                for (let k in _storage) {
                    this.storage[k] = _storage[k];
                }
            }
            return true;
        }
        return false;
    }
    save(){
        let _storage;
        _storage ="{";
        for (let k in this.storage) {
            _storage += k + ":" + this.storage[k] + ","
        }
        _storage = _storage.replace(/,$/g, "") + "}";
        window.localStorage.setItem("cart", _storage);
        return this;
    }
    add(_identify,_counter){
        if(this.common()){
            if(_counter) {
                this.storage[_identify] = _counter;
            }else{
                if(this.storage[_identify]) {
                    this.storage[_identify]++;
                }else{
                    this.storage[_identify]=1;
                }
            }
            this.save();
        }
    }
    subtract(_identify,_counter){
        if(this.common() && this.storage[_identify]){
            if(parseInt(this.storage[_identify])>_counter) {
                this.storage[_identify] = this.storage[_identify] - _counter;
            }else{
                delete this.storage[_identify];
            }
            this.save();
        }
    }
    delete(_identify){
        if(this.common() && this.storage[_identify]){
            delete this.storage[_identify];
            this.save();
        }
    }
    statistic(){//统计数量
        let _summary=0;
        if(this.common()) {
            for (let k in this.storage) {
                _summary += this.storage[k];
            }
        }
        return _summary;
    }
}