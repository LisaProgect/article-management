import axios from "axios";
import { HttpFactoryService } from "../../shared/services/http-factory.service";
import type { HttpService } from "../../shared/services/http.service";

class UserService {
  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  private readonly module = "pod-location";

  public async updateLogo(props: {
    newImage: File | null;
    locationId: string;
  }): Promise<UpdateLocationImageRes> {
    const formData = new FormData();

    formData.append("file", props.newImage ?? "");

    return axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/${this.module}/update-logo/${
        props.locationId
      }`,
      formData,
      {
        withCredentials: true,
      }
    );
  }

  public async updateHeadImage(props: {
    newImage: File | null;
    locationId: string;
  }): Promise<UpdateLocationImageRes> {
    const formData = new FormData();

    formData.append("file", props.newImage ?? "");

    return axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/${this.module}/update-head-image/${
        props.locationId
      }`,
      formData,
      {
        withCredentials: true,
      }
    );
  }

  public async deleteLogo(props: { locationId: string }): Promise<void> {
    return this.httpService.post(
      `${this.module}/delete-logo/${props.locationId}`,
      {}
    );
  }

  public async deleteHeadImage(props: { locationId: string }): Promise<void> {
    return this.httpService.post(
      `${this.module}/delete-head-image/${props.locationId}`,
      {}
    );
  }

  public async updateAddLocations(props: {
    locationId: string;
  }): Promise<UpdateLocationImageRes> {
    return this.httpService.post(
      `${this.module}/update-all-opening-hours/${props.locationId}`,
      {}
    );
  }

  public async getLocationById(
    locationId: string
  ): Promise<PodLocation | null> {
    return this.httpService.get(`${this.module}/get-by-id/${locationId}`, {});
  }

  public async updateCanvasAlbum(
    locationId: string,
    data: UpdateCanvasAlbum
  ): Promise<void> {
    return this.httpService.put(
      `${this.module}/update-canvas-album/${locationId}`,
      data
    );
  }

  public async updateCanvasSlide(
    locationId: string,
    image: File | null
  ): Promise<UpdateLocationImageRes> {
    const formData = new FormData();
    formData.append("file", image ?? "");
    return axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/${
        this.module
      }/update-slide/${locationId}`,
      formData,
      {
        withCredentials: true,
      }
    );
  }

  public async replaceCanvasSlide(
    locationId: string,
    idx: number,
    image: File | null
  ): Promise<UpdateLocationImageRes> {
    const formData = new FormData();
    formData.append("file", image ?? "");
    return axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/${
        this.module
      }/replace-slide/${locationId}/${idx}`,
      formData,
      {
        withCredentials: true,
      }
    );
  }

  public async deleteSlide(locationId: string, idx: number): Promise<void> {
    return this.httpService.delete(
      `${this.module}/delete-slide/${locationId}/${idx}`
    );
  }

  public async applyAllCanvasAlbum(locationId: string): Promise<void> {
    return this.httpService.post(
      `${this.module}/apply-all-canvas-album/${locationId}`,
      {}
    );
  }

  public async applyAllLogo(locationId: string): Promise<void> {
    return this.httpService.post(
      `${this.module}/apply-all-logo/${locationId}`,
      {}
    );
  }
}

export const userService = new UserService(
  new HttpFactoryService().createHttpService()
);
