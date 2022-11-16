import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { IZoomPayload, TMeetingForm, TUser } from "../../types";

interface IProps {
  token: string | null;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  IsLoading: boolean;
}

export const ModalForm: FC<IProps> = ({
  token,
  setIsSuccess,
  setIsLoading,
}) => {
  const [open, setOpen] = useState<boolean>(token ? true : false);
  const [duration, setDuration] = useState("");
  const [value, setValue] = useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  const [IsDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState<TMeetingForm>({
    password: "",
    topic: "",
    showPassword: false,
  });

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (formData.topic && formData.password) setIsDisabled(false);
    else setIsDisabled(true);
  }, [formData]);

  const handleFormSubmit = async () => {
    if (!IsDisabled) {
      setIsLoading(true);
      setOpen(false);

      let res = await axios.post("/api/zoom/user", { token: token });
      let user: TUser = res.data.users[0];

      let zoomPayload: IZoomPayload = {
        agenda: formData.topic,
        default_password: false,
        duration: duration || 30,
        password: formData.password,
        pre_schedule: false,
        schedule_for: user.email,
        settings: {
          allow_multiple_devices: true,
          alternative_hosts_email_notification: true,
          close_registration: false,
          contact_email: "sid86harth@gmail.com",
          contact_name: user.first_name + " " + user.last_name,
          email_notification: true,
          encryption_type: "enhanced_encryption",
          host_video: true,
          join_before_host: false,
          meeting_authentication: true,
          meeting_invitees: [
            {
              email: "sid86harth@gmail.com",
            },
          ],
          mute_upon_entry: false,
          participant_video: false,
          private_meeting: true,
          registrants_confirmation_email: true,
          registrants_email_notification: true,
          registration_type: 1,
          show_share_button: true,
          use_pmi: false,
          waiting_room: false,
          watermark: false,
          host_save_video_order: true,
          alternative_host_update_polls: true,
        },
        start_time: value?.format("YYYY-MM-DDTHH:mm:ss.000") + "Z",
        template_id: "Dv4YdINdTk+Z5RToadh5ug==",
        timezone: user.timezone,
        topic: formData.topic,
      };

      let payload = {
        meeting: zoomPayload,
        user: user,
        token: token,
      };

      axios
        .post("/api/zoom/new", payload)
        .then(async (res) => {
          axios.post("/api/mail/send-meeting-confirmation", res.data);
          setIsLoading(false);
          setIsSuccess(true);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleForm =
    (prop: keyof TMeetingForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleDurartion = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Modal
      className="mt-5"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-dialog modal-lg bg-white rounded">
        <div className="modal-content p-5 rounded-4 shadow-xl">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">Set a Zoom meeting</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body text-start">
            <div className="row my-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* Date Selector */}
                <div className="mb-3 col-md-6">
                  <MobileDatePicker
                    className="w-100"
                    label="Date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                {/* Time Selector */}
                <div className="mb-3 col-md-6">
                  <TimePicker
                    className="w-100"
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </LocalizationProvider>

              {/* Meeting Topic */}
              <div className="my-4 col-md-12">
                <TextField
                  className="w-100"
                  required
                  id="filled-required"
                  label="Topic"
                  defaultValue=""
                  variant="outlined"
                  value={formData.topic}
                  onChange={handleForm("topic")}
                />
              </div>

              {/* password field */}
              <div className="my-4 col-md-6">
                <FormControl className="w-100" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={formData.showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleForm("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {formData.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>

              {/* duration */}
              <div className="my-4 col-md-6">
                <FormControl className="w-100">
                  <InputLabel id="demo-simple-select-helper-label">
                    Duration
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={duration}
                    label="Duration"
                    onChange={handleDurartion}
                  >
                    <MenuItem value={10}>10 Min</MenuItem>
                    <MenuItem value={30}>30 Min</MenuItem>
                    <MenuItem value={45}>45 Min</MenuItem>
                  </Select>
                  <FormHelperText>Leave empty if not confirmed</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className="modal-footer flex-column border-top-0">
              <button
                type="button"
                className="btn btn-lg btn-primary w-100 mx-0 mb-4 align-items-center d-flex justify-content-center"
                onClick={handleFormSubmit}
                disabled={IsDisabled}
              >
                Set Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
