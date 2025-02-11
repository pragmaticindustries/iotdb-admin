package org.apache.iotdb.admin.model.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.util.List;

@Data
public class DeviceInfoDTO implements Serializable {

    @NotEmpty(message = "物理量列表不能为空")
    private List<DeviceDTO> deviceDTOList;

    @NotNull(message = "设备名不能为null")
    @Pattern(regexp = "^[^ ]+$", message = "不能包含空格")
    private String deviceName;

    private String description;

    private Integer deviceId;
}
