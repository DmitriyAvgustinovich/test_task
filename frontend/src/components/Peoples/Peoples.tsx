import { Card } from "antd";
import { useGetAllUsersQuery } from "../../store/api/usersApi";
import { Page } from "../Page/Page";
import styles from "./PeoplesPage.module.scss";
import { IUser } from "../../store/api/types";
import moment from "moment";

export const Peoples = () => {
  const { data: usersData } = useGetAllUsersQuery(null);

  const calculateAge = (birthDate) => {
    const diff = moment().diff(moment(birthDate), "years");
    return diff;
  };

  return (
    <Page>
      <div className={styles.Peoples}>
        {usersData?.map((user: IUser) => (
          <Card className={styles.card} hoverable>
            <img className={styles.img} alt="" src={user.avatarUrl} />
            <Card.Meta
              title={`Имя: ${user.name}`}
              description={
                <>
                  <p>Email: {user.email}</p>
                  <p>Возраст: {calculateAge(user.birth_date)}</p>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </Page>
  );
};
