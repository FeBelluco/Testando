import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import Text from "components/Text";
import Icon from "components/Icon";
import Spacer from "components/Spacer";

import * as S from "./styles";

interface StatusProps {
  waiting?: "Aguardando serviço";
  tecnician?: "Aguardando Técnico";
  canceled?: "Cancelado";
  finished?: "Finalizado";
}

interface ServiceStatusProps {
  status?: StatusProps[];
}

const StatusServiceBar: React.FC<ServiceStatusProps> = ({ status }) => {
  const theme = useTheme();

  console.log("Achou", status.map);
  return (
    <S.StatusView>
      <S.TextView>
        <Text
          size={13}
          style={{
            fontFamily: theme.fonts.medium,
            color: theme.colors.text.white,
            left: 15,
          }}
        >
          {status.map(i)}
        </Text>
      </S.TextView>

      <S.IconView>
        <Icon
          name="clock-outline"
          type="material-community"
          size={27}
          color={theme.colors.backGroundModal}
        />
      </S.IconView>
    </S.StatusView>
  );
};

export default StatusServiceBar;
