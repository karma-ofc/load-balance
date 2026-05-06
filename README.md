# load-balance 22-23 practice frontend
Подготовлены и запущены 3 backend-сервера в докере, а также Nginx балансировщик и HAProxy балансировщик (8080 и 8081 порты)
<img width="1232" height="452" alt="{C7B27CCF-6A67-42DA-B7FB-AD35A0C6EBE3}" src="https://github.com/user-attachments/assets/3d40ea61-46f6-4480-8ae3-2ba7e14aa236" />
<img width="1179" height="172" alt="{C4D0176A-31F6-4F88-9ECD-30044AE19AF7}" src="https://github.com/user-attachments/assets/ebf1307e-e03a-4d5e-8dfe-c3b5efaa3482" />
Сервер с портом 3002 - backup
<img width="1151" height="57" alt="{2F7BFDD6-D72B-40C4-AC19-CAE4A139911C}" src="https://github.com/user-attachments/assets/c0efd3d5-9427-482b-a4e6-53df07b67f3d" />
Проверка балансировки (Nginx & Round Robin)
Первый запрос
<img width="1229" height="612" alt="{81FF7C69-8D14-4ADC-BB49-3B172E026940}" src="https://github.com/user-attachments/assets/67f9e8c0-1ccf-47a2-9d21-4bc0b471cf0b" />
Второй запрос
<img width="1235" height="737" alt="{2641BBF4-F804-436F-92E3-E473B3DF8DED}" src="https://github.com/user-attachments/assets/0b55ab45-6c82-4b83-9c93-b192cb1ce5a7" />
Запросы распределяются между серверами
Проверка с отключением сервера (3000)
<img width="1197" height="71" alt="{64D2122A-A8D6-440E-A769-105A14602830}" src="https://github.com/user-attachments/assets/10bde370-b675-4137-ac93-5c08d9c8b36e" />
<img width="1234" height="798" alt="{4F99F487-3BB2-4E4D-8FD3-4C1D5C09FBC9}" src="https://github.com/user-attachments/assets/420e3545-afcc-46ce-abd2-68fe73eedd6c" />
Проверка с отключением сервера (3001)
<img width="1190" height="74" alt="{7EFBB5CC-B137-401B-99F3-286B713AADDE}" src="https://github.com/user-attachments/assets/c98e4c1a-fe4c-431d-b9cd-20a661a1b00f" />
<img width="1241" height="858" alt="{00C402C6-18EF-4184-BEEA-FC3B96E39795}" src="https://github.com/user-attachments/assets/2a75fd81-258f-4b9f-9c0d-2665b1544f12" />
Проверка с отключением обоих серверов (для перехода на backup)
<img width="1235" height="184" alt="{2B4EE9FD-C3CC-4633-898A-3C5B8A8FC213}" src="https://github.com/user-attachments/assets/ee67ac7e-5eef-4973-99ae-ceaf9c1e39c2" />
<img width="1278" height="772" alt="{9C78B284-DFE0-4B58-93E9-48BB63EF04C5}" src="https://github.com/user-attachments/assets/c3121c95-37af-42f4-9998-9b66d569a44d" />

Проверка балансировки (Nginx & Least Connections) 
Для проверки был отправлен медленный запрос localhost:8080/slow, пока он выполнялся были быстро отправлены несколько запросов на localhost:8080/least (эндпоинт Least Connections)
<img width="1160" height="763" alt="{018BD4F3-02A5-4BA0-ADB9-8EDE877D2E2B}" src="https://github.com/user-attachments/assets/7412ddcd-d9ea-447a-a325-aa0a156faab5" />
Короткие запросы
<img width="1185" height="822" alt="{6E555816-AC08-426E-B7FB-B7C57FBA0D1A}" src="https://github.com/user-attachments/assets/87bf8eec-c5f0-4bee-a585-9f2ccceb7152" />
<img width="1160" height="749" alt="{26FF4026-68A7-4898-AF7A-B669617FB87D}" src="https://github.com/user-attachments/assets/6ebadd91-00e6-45b4-b110-f96204b64a04" />
Новые запросы доходят до сервера без активных долгосрочных соединений
Проверка с отключением сервера (3000)
<img width="1248" height="220" alt="{A4A934B8-9244-4913-A8CF-4AFFA6512665}" src="https://github.com/user-attachments/assets/ec481606-a948-4282-9ddb-67ad27cc6983" />
Отключим 3001
<img width="1174" height="64" alt="{5EBDCA85-3CA7-4022-9EBD-10AF9A3C1FE0}" src="https://github.com/user-attachments/assets/3cddd45d-6cba-4657-a90f-3e00bd5237ef" />
<img width="1237" height="728" alt="{C7A2B1DD-0A8F-411B-9259-B650F5393B18}" src="https://github.com/user-attachments/assets/5b2deb3d-ed6b-4c58-b0d4-d800aa9f2151" />
Проверка балансировки (Nginx & IP Hash)
<img width="1249" height="784" alt="{F3688B24-788A-4FF3-BD69-3A6B4A9D8595}" src="https://github.com/user-attachments/assets/f4ca32c9-a4f0-4311-a96d-ca89a6d16097" />
<img width="1213" height="702" alt="{714E0297-D04C-4B0E-A49F-A504A5323FE3}" src="https://github.com/user-attachments/assets/5fa557de-294c-4be7-858c-1cafb85fce4b" />
Один IP клиента всегда маршрутизируется на один сервер
Если отключить сервер с портом 3000, он перебросит на 3001 и закрепится за ним, даже если включить 3000 обратно
<img width="1161" height="110" alt="{307A293C-7921-411B-91A4-D2C82BEFBDB1}" src="https://github.com/user-attachments/assets/4b59fa09-dc72-4884-bfa4-401da11a61f5" />
<img width="1254" height="837" alt="{C55615C4-62E0-4500-9315-467C0003F1F4}" src="https://github.com/user-attachments/assets/fba52918-7f46-460e-becb-53fd51a53e74" />
Включаем
<img width="1191" height="136" alt="{70C8C8BE-01B4-4F27-B7B9-919E9C4F1DE0}" src="https://github.com/user-attachments/assets/0ea51f8b-fab1-4a90-8efa-017d88fb951b" />
<img width="1231" height="663" alt="{83247BA2-5D81-47B5-9F70-2CAAFD99E93F}" src="https://github.com/user-attachments/assets/0fabcfd0-4f45-4275-b7ef-3921ea76d6dd" />
Если отключить оба, то он закрепится на бэкапе
<img width="1174" height="190" alt="{4FBB0993-14F2-4DCF-8E2A-6A8F3947BC2F}" src="https://github.com/user-attachments/assets/c1f0c7c6-861e-41fc-b70c-58b808c85870" />
<img width="1239" height="731" alt="{9D82A29F-CAE9-47DE-9309-A4A95085D0D2}" src="https://github.com/user-attachments/assets/80551109-07d8-46ec-b40e-e99af5005884" />
Проверка если включить обратно
<img width="1219" height="451" alt="{464360D2-ECCF-4367-A2EE-196102A12DD5}" src="https://github.com/user-attachments/assets/e094a4ac-dc19-4252-bb14-d330291f7666" />
<img width="1213" height="753" alt="{2CDCE206-B00F-46CA-BC6B-148EF424F8F6}" src="https://github.com/user-attachments/assets/cfdcc994-8763-41db-8e12-2f52cb2b55e6" />
Проверка балансировки (HAProxy & Round Robin)
<img width="1231" height="740" alt="{81126FD9-BEF0-403F-B206-B54440BE3C80}" src="https://github.com/user-attachments/assets/05cd273a-d71e-4dfe-bdd7-5e15bee42738" />
<img width="1222" height="702" alt="{63177ED9-DB41-4BA8-86CE-2313636DEA42}" src="https://github.com/user-attachments/assets/2f702d4e-ccf8-47a6-8abe-e1d7e2b69b7a" />
Запросы последовательно распределяются между серверами
Если отключить оба, пойдут на бэкап
<img width="1176" height="178" alt="{97C32F2F-1414-493F-A947-E0C9C5DC0B7D}" src="https://github.com/user-attachments/assets/dbd0d10e-d281-42e0-9baa-5852f98ad2f8" />
<img width="1263" height="759" alt="{861A6301-C8E9-49D5-BEDA-97807A25656F}" src="https://github.com/user-attachments/assets/573adc4c-3e7e-41ec-b423-504577574f63" />
Проверка балансировки (HAProxy & Least Connections)

Для проверки был отправлен медленный запрос localhost:8081/slow, пока он выполнялся были быстро отправлены несколько запросов на localhost:8081/least
<img width="1241" height="700" alt="{C32EAEF4-6404-4425-9188-3EDFA30B602D}" src="https://github.com/user-attachments/assets/12aab10d-8cf5-436e-850a-ae6f614e3963" />
Два быстрых
<img width="1214" height="703" alt="{945766AE-454C-4BB1-8F19-2B5B036FE0B9}" src="https://github.com/user-attachments/assets/3bf1195d-8fcd-4db9-ab3a-1715acc87dc8" />
<img width="1223" height="655" alt="{E26AD48F-ADAC-40DD-9C71-E0536B1F0186}" src="https://github.com/user-attachments/assets/6a830b59-f2a1-4673-9798-1a4a2f3c7d3e" />
Новые запросы доходят до того сервера, который без активных долгосрочных соединений
Проверка балансировки (HAProxy & IP Hash)
<img width="1238" height="746" alt="{134F790F-79D4-4E42-A3D1-006FC1E2AB2C}" src="https://github.com/user-attachments/assets/f1408794-1dda-4405-bb5f-e99be396edce" />
<img width="1257" height="772" alt="{48AC6903-2C99-4C5B-95AC-94405124AB48}" src="https://github.com/user-attachments/assets/93de9e8e-e256-4c2a-8253-20e4bce39a5c" />
Если выключить на сервер на котором он закрепился, то он перейдет на другой и зафиксируется на нем
<img width="1176" height="92" alt="{A169C0AE-025F-4E34-BBE2-BA4EF8B0AE21}" src="https://github.com/user-attachments/assets/d42b8dc1-04c1-49b7-8fb0-442856e3223e" />
<img width="1221" height="778" alt="{25278386-74C6-4F52-9AB2-08282E388400}" src="https://github.com/user-attachments/assets/2c82981f-ad87-411c-be69-ce2262294ff3" />
Практика 23
все backend теперь работают на одном порту 8080, backend переведён на Express, а Nginx и HAProxy ходят к сервисам по именам внутри docker

Проверка
Сервера запущены на 8080
<img width="1188" height="255" alt="{3083A4E1-AC67-4EEF-875D-86C417900E36}" src="https://github.com/user-attachments/assets/f64b2bb7-6711-4cd4-967e-84a16dc8473c" />
проверить балансировку: при повторных запросах curl http://localhost/ ответ
должен поочерёдно приходить от разных backend-серверов;

Через PostMan проверю как работает балансировка
Первый запрос
<img width="1218" height="725" alt="{5CD2A500-E84A-4F9F-B872-4FF121EA3E1B}" src="https://github.com/user-attachments/assets/8567db0c-49a7-4815-a627-76b4f3c3e124" />
Второй запрос
<img width="1222" height="704" alt="{FC5A2176-03DD-4EBC-961C-FFE2236EE7D7}" src="https://github.com/user-attachments/assets/4af518f7-258e-46c6-8b33-9543d459a3ea" />
добавить настройки отказоустойчивости через max_fails и fail_timeout в
конфигурации Nginx;
<img width="522" height="55" alt="{A885CDB4-3391-4D8D-B609-51D3006BA99C}" src="https://github.com/user-attachments/assets/6fc32f19-a7f2-47d0-9c99-4dde6a0ed0fb" />

остановить один из backend-контейнеров и убедиться, что Nginx перестаёт
направлять на него запросы и продолжает обслуживать трафик через оставшиеся.
Сервер сменился, если выключить один из серверов, запрос упадет на свободный (выключаем backend-2)
<img width="1166" height="99" alt="{B6E7FB66-F5AD-4ED7-8A6C-ADE13ACA1CF6}" src="https://github.com/user-attachments/assets/58a152fa-c333-48b1-8f44-5b0adf8501b0" />
<img width="1226" height="805" alt="{C341F97E-DF16-42B7-BB2B-9C4C4E2F7EA8}" src="https://github.com/user-attachments/assets/524b1b30-488c-448a-ac70-ff3fe0cf2820" />
