import Teams from "../database/classes/Teams";

export interface DefaultReturn {
  status: number,
  message: Teams[] | Teams | undefined | null
}