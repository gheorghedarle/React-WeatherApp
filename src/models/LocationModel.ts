import {
  EmptyLocationPositionModel,
  LocationPositionModel,
} from "./LocationPositionModel";

export interface LocationModel {
  position: LocationPositionModel;
  country: string;
  locality: string;
}

export const EmptyLocationModel = {
  position: EmptyLocationPositionModel,
  country: "",
  locality: "",
};
