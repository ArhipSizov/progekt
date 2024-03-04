import "./App.css";

function App() {
  return (
    <div className="All">
      <div className="nav">
        <div className="nav_1">
          <img className="img_logo" src="/cabinet/logo.png" alt="" />
          <p className="nav_p">Каталог</p>
          <p className="nav_p">Новости</p>
          <p className="nav_p">Доставка</p>
          <p className="nav_p">О нас</p>
          <p className="nav_p">Контакты</p>
        </div>
        <div className="nav_2">
          <div className="nav_div">
            <img className="nav_img" src="/cabinet/heart_nav.svg" alt="" />
          </div>
          <div className="nav_div">
          <img className="nav_img" src="/cabinet/man_nav.svg" alt="" />
          </div>
          <div className="nav_div">
          <img className="nav_img" src="/cabinet/busket_nav.svg" alt="" />
          </div>
        </div>
      </div>
      <p className="p">личный кабинет</p>
      <div className="All_but">
        <div className="div_but_1 div_but">
          <img className="img_but" src="/cabinet/man.svg" alt="" />
          <p className="p_but">Детали профиля</p>
        </div>
        <div className="div_but_2 div_but">
          <img className="img_but" src="/cabinet/busket.svg" alt="" />
          <p className="p_but">Заказы</p>
        </div>
        <div className="div_but_3 div_but">
          <img className="img_but" src="/cabinet/heart.svg" alt="" />
          <p className="p_but">Список желаемого</p>
        </div>
        <div className="div_but_4">
          <img className="img_but" src="/cabinet/exit.svg" alt="" />
          <p className="p_but_4">Выйти</p>
        </div>
      </div>
      <div className="All_akk">
        <div className="all_main">
          <img className="all_main_img" src="/cabinet/man_photo.png" alt="" />
          <div>
            <p>Добрый день</p>
            <p>Иван Иванов</p>
            <div>
              <img src="/cabinet/downloud.svg" alt="" />
              <p className="all_main_p">Загрузить фото</p>
              <p>(jpeg, png)</p>
            </div>
          </div>
        </div>
        <div>
          <input
            placeholder="Номер телефона"
            defaultValue="+38 000 000 00 00"
            type="text"
          />
          <input placeholder="e-mail" defaultValue="agh@gmail.com" type="text" />
          <input placeholder="Страна" defaultValue="Украина" type="text" />
          <input placeholder="Город" defaultValue="Днепр" type="text" />
          <input placeholder="Улица" defaultValue="ул. Шевченка" type="text" />
        </div>
        <div>
          <p>Пароль</p>
          <div>
            <input type="password" defaultValue="159236" />
            <div className="button_all">
              <p>Сменить пароль</p>
            </div>
          </div>
        </div>
        <div>
          <p>Платежная система</p>
          <div>
            <input value="5115 5555 5555 5555" />
            <div>
              <input value="07/24" />
              <input value="***" />
            </div>
          </div>
        </div>
        <div className="button_all">
          <p>Сохранить</p>
        </div>
      </div>
      <div className="footer">
        <div className="footer_div">
          <img className="img_logo" src="/cabinet/logo.png" alt="" />
          <p className="footer_p">© 2021 “Copper Pro” Все права защищенны</p>
          <p className="footer_p">Политика конфиденциальности</p>
        </div>
        <div className="footer_alt">
          <div className="footer_div">
            <p className="footer_p_top">Навигация</p>
            <p className="footer_p">Каталог</p>
            <p className="footer_p">Новости</p>
            <p className="footer_p">Доставка</p>
            <p className="footer_p">О нас</p>
            <p className="footer_p">Контакты</p>
          </div>
          <div className="footer_div">
            <p className="footer_p_top">Каталог</p>
            <p className="footer_p">Для эфирных масел</p>
            <p className="footer_p">Для гидролатов</p>
            <p className="footer_p">Медная посуда</p>
            <p className="footer_p">Аксессуары из меди</p>
            <p className="footer_p">Индивидуальный заказ</p>
            <p className="footer_p">Скидки и предложения</p>
          </div>
          <div className="footer_div">
            <p className="footer_p_top">Контакты</p>
            <p className="footer_p">Бажана 8-Б, Киев, 02132 Украина</p>
            <p className="footer_p">+38 (096) 990 67 56</p>
            <p className="footer_p">a.alambik@gmail.com</p>
            <div className="footer_div_alt">
              <img className="footer_contacts" src="/cabinet/Twitter.png" alt="" />
              <img className="footer_contacts" src="/cabinet/Facebook.png" alt="" />
              <img className="footer_contacts" src="/cabinet/Instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
