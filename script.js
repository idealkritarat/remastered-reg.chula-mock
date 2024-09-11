function toggleIniAlert(){
    $("#initial-alert").toggle();
}

let current_page_LANG = "TH"
let LANGS_ = {
    "ENG" : ["Login","Logout","Rules","TH","Login to Register","Please enter your Student ID and Password to login.","Use CUNET Account","Student ID :","Password :","Enter charecter 4 digit before press submit","Submit","If you can not login. Please contact the Office of Information Technology","4th floor, Chamjuree Bld'g. 3.","Phone: +66 (0) 2218-3314","Online Registration Guide","To enter the registration system of the office, one must conform to the following.","It is obliged that one do it by oneself. Not doing so will result in penalty.","One is responsible for the registration through one's password.","One may confirm one's registration at the maximum of 10 times a day.","Students have to check the results of their registration immediately after the Late Registration/Addition/Dropping/Section Change via the internet and should print the CR54 after the dateline of the Late Reigstration/Addition/Dropping/Section Change as evidence of registration.","The website works in every browser.","This site is best viewed with Internet Explorer.","","Close"],
    "TH" : ["เข้าสู่ระบบ","ออกจากระบบ","ข้อกำหนด","EN","เข้าสู่ระบบลงทะเบียนเรียน","กรุณาป้อนเลขประจำตัวนิสิต/เลขประจำตัวเจ้าหน้าที่  และรหัสผ่าน","รหัสผ่าน คือรหัสผ่านที่ใช้กับระบบอินเตอร์เน็ตของสำนักบริหารเทคโนโลยีสารสนเทศ จุฬาลงกรณ์มหาวิทยาลัย","เลขประจำตัว","รหัสผ่าน","ป้อนค่าตามภาพที่เห็น 4 หลัก ก่อนกดปุ่ม ตกลง","ตกลง","กรณีนิสิตลืมรหัสผ่าน CUNET สำหรับการเข้าสู่ระบบ ติดต่อที่สำนักบริหารเทคโนโลยีสารสนเทศ","อาคารจามจุรี 3 ชั้น 4.","โทร. 02- 218-3314 อีเมล์ help@chula.ac.th","ข้อกำหนดการเข้าสู่ระบบการลงทะเบียนเรียน","การเข้าสู่ระบบการลงทะเบียนเรียนของสำนักงานการทะเบียน มีข้อกำหนดดังนี้","นิสิตจะต้องดำเนินการด้วยตนเอง และห้ามดำเนินการแทนนิสิตผู้อื่น มิฉะนั้นนิสิตจะถูกลงโทษทางวินัย","นิสิตต้องรับผิดชอบผลการลงทะเบียนเรียนที่เกิดขึ้นจากรหัสผ่าน (Password) ของนิสิต","สำนักงานการทะเบียนกำหนดให้นิสิตแต่ละคนยืนยันการลงทะเบียนเรียนได้ไม่เกินวันละ 10 ครั้ง","นิสิตต้องตรวจสอบผลการลงทะเบียนเรียนทันทีทุกครั้งหลังจากที่ทำการลงทะเบียนเรียนสาย เพิ่ม-ลดรายวิชา หรือเปลี่ยนตอนเรียนผ่านทางอินเทอร์เน็ตและควรพิมพ์ผลการลงทะเบียนเรียน (CR54) หลังหมดกำหนดการเพิ่ม-ลดรายวิชา เพื่อตรวจสอบและเก็บไว้เป็นหลักฐาน","สามารถรองรับการใช้งานได้ทุก Browser","ใช้งานได้ดีใน Internet Explorer"]
}
UpdatePageLANG();


function ChangePageLANG() {
    if (current_page_LANG == "ENG") current_page_LANG = "TH";
    else current_page_LANG = "ENG";
    UpdatePageLANG();
}

function UpdatePageLANG(){
    console.log("Updated language");
    document.body.innerHTML = `
    <div class="flex">
        <nav>
            <div class="w-[190px] h-full min-h-screen  bg-[#FCC] p-2 flex flex-col gap-5">
                <img src="https://www2.reg.chula.ac.th/cu/reg/images/toplogo01.gif" class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <button class="bg-[#f8a3a3] hover:bg-[#eb9999] text-[#3c1616] p-2 rounded">${LANGS_[current_page_LANG][0]}</button>
                    <button class="border-2 border-[#eb9999] hover:bg-[#eb9999] text-[#3c1616] p-2 rounded">${LANGS_[current_page_LANG][1]}</button>
                </div>
            </div>
        </nav>
        <main class="grow flex flex-col min-h-screen relative">
            <div class="w-full py-3 px-4 flex justify-between items-center">
                <button class="border-2 border-[#eb9999] hover:bg-[#eb9999] hover:text-white py-2 rounded-full px-4" onclick="toggleIniAlert();">${LANGS_[current_page_LANG][2]}</button>
                <button onclick="ChangePageLANG();" class="border-2 border-[#eb9999] hover:bg-[#eb9999] hover:text-white py-2 rounded-full px-4">${LANGS_[current_page_LANG][3]}</button>
            </div>
            <div class="w-full h-full grow py-7 px-3">
                <div class="flex flex-col items-center gap-10">
                    <div class="flex flex-col items-center gap-5 text-center">
                        <span class="font-extrabold text-3xl">${LANGS_[current_page_LANG][4]}</span>   
                        <span class="font-semibold text-xl">${LANGS_[current_page_LANG][5]}</span>    
                        <span class="font-semibold text-xl">${LANGS_[current_page_LANG][6]}</span>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex justify-between items-center gap-2">
                            <span class="text-nowrap">${LANGS_[current_page_LANG][7]}</span>
                            <input type="text" class="outline-none border p-2 px-4 rounded-full max-w-80 w-full focus:border-[#eb9999]" placeholder="Student ID (10 Letters)">
                        </div>
                        <div class="flex justify-between items-center gap-2">
                            <span class="text-nowrap">${LANGS_[current_page_LANG][8]}</span>
                            <input type="password" class="outline-none border py-2 px-4 rounded-full max-w-80 w-full focus:border-[#eb9999]" placeholder="Password">
                        </div>
                        
                        <div class="flex flex-col items-center justify-between gap-3">
                            <div class="flex justify-center items-center gap-4">
                                <input type="text" class="outline-none border py-2 px-4 rounded-full w-36 focus:border-[#eb9999]">
                                <img src="https://www2.reg.chula.ac.th/images/random/1721055911813tJLOlA8nMn_GBFeTzpiF8CR.png?0.679930770987799">
                                <button><img src="https://www2.reg.chula.ac.th/requestDocument/sound-on.png"></button>
                            </div>   
                            <span class="text-center">${LANGS_[current_page_LANG][9]}</span>
                        </div>
                    </div>      
                    <button class="border-2 border-[#eb9999] hover:bg-[#eb9999] p-2.5 rounded-full w-full max-w-[600px] hover:text-white">${LANGS_[current_page_LANG][10]}</button>
                </div>
            </div>
            <footer class="border-t-4 border-[#FCC] p-6 flex flex-col gap-2 font-medium">
                <div>${LANGS_[current_page_LANG][11]}</div>
                <div>${LANGS_[current_page_LANG][12]}</div>
                <div>${LANGS_[current_page_LANG][13]}</div>
            </footer>
            <div id="initial-alert" style="transition: 1s all ease;">
                <div onclick="toggleIniAlert();" class="top-0 left-0 bg-black opacity-20 fixed w-screen h-screen"></div>
                <div class="max-w-[1000px] w-11/12 fixed bg-white border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-2xl">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center p-5 border-b gap-3">
                            <span class="font-bold text-lg">${LANGS_[current_page_LANG][14]}</span>
                            <span onclick="toggleIniAlert();" class="font-bold text-[#CCC] hover:text-[#7F7F7F] cursor-pointer">X</span>
                        </div>
                        <div class="p-5 grow overflow-y-scroll max-h-[500px]">
                        ${LANGS_[current_page_LANG][15]}
                            <ul class="list-disc ps-10">
                                <li>${LANGS_[current_page_LANG][16]}</li>
                                <li>${LANGS_[current_page_LANG][17]}</li>
                                <li>${LANGS_[current_page_LANG][18]}</li>
                                <li>${LANGS_[current_page_LANG][19]}</li>
                                <li>${LANGS_[current_page_LANG][20]}</li>
                                <li>${LANGS_[current_page_LANG][21]}</li>
                            </ul>
                        </div>
                        <div class="flex justify-end items-center p-3 border-t h-fit">
                            <button onclick="toggleIniAlert();" class="border-2 border-[#eb9999] hover:bg-[#eb9999] hover:text-white py-2 rounded-full px-4">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
    `
}