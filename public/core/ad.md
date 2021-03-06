# 矿机相关

## 获取全部矿机
```
POST /miner
```

#### 响应

```
Status: 200 OK
```
```json
{
    "status":200,
    "message":"",
    "data": [
         {
            "id":2,
            "miner_alias":"我的小蜜蜂", 
            "status": "INACTIVE",
            "shares_1d": 7.52,
            "shares_1d_unit": "T",
            "earn_coin_1d": 8.99
	    }
    ]
    
}
```
#### 输出字段说明
 
| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| miner_alias | string | 矿机别名 |
| status | string | 矿机状态 |
| shares_1d | number | 矿机1天算力 |
| shares_1d_unit | string | 矿机1天算力单位 |
| earn_coin_1d | number | 1天收益 默认为Lrc |



## 获取单个矿机收益明细

```
POST /miner/{id}
```

#### 请求参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| id | int | 矿机id |

#### 响应

```
Status: 200 OK
```
```json
{
    "status":200,
    "message":"",
    "data": [
         {
            "date": 1522119459,
            "shares_1d": 7.52,
            "shares_1d_unit": "T",
            "earn_coin_1d": 8.99
        },
         {
           "date": 1522119459,
           "shares_1d": 7.52,
           "shares_1d_unit": "T",
           "earn_coin_1d": 8.99
	    }
    ]
    
}
```
 