import { Injectable } from '@nestjs/common';
import * as moment from "moment";

@Injectable()
export class DatediffService {
  getDaysUntilMyBirthday(
    birthday: string,
  ) {
    const dateBeginning = moment();
    const dateFinal = moment(birthday).add(1, "days");
    return dateFinal.diff(dateBeginning, "days");
  }
}