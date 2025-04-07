"use client";

import classes from "./LanguageBox.module.css";
import Image from "next/image";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { languages } from "@/utils/localData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomSelect = styled(Select)((small) => ({
  "& .MuiSelect-icon": {
    left: small ? 2 : 12,
    right: "unset",
    width: small ? 20 : "",
    width: small ? 20 : "",
    paddingBottom: "2px",
    color: "var(--color-gray-200)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export default function LanguageBox({ small = false }) {
  const [selected, setSelected] = useState("fa");
  const [searchValue, setSearchValue] = useState();

  return (
    <CustomSelect
      className={`${classes.box} ${small ? classes.smallBox : ""}`}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      IconComponent={ExpandMoreIcon}
      displayEmpty
      MenuProps={{
        PaperProps: {
          sx: {
            mt: 1.5,
            padding: "18px",
            borderRadius: "var(--rounded-md)",
            bgcolor: "var(--color-gray-600)",
            color: "var(--color-white-800)",
          },
        },
      }}
      renderValue={(value) => {
        const lang = languages.find((l) => l.code === value);

        return (
          <div
            className={`${classes.selected} ${
              small ? classes.smallSelected : ""
            }`}
          >
            <Image
              src="/icons/flag.svg"
              width={small ? 20 : 28}
              height={small ? 20 : 28}
              alt="flag"
            />
            {small
              ? lang.name.split("")[0] + lang.name.split("")[1]
              : lang.name}
          </div>
        );
      }}
    >
      <div className={classes.search}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="جستجوی زبان ..."
        />
        <Image src="/icons/search-sm.svg" width={16} height={16} alt="search" />
      </div>
      {languages.map((lang) => (
        <MenuItem
          key={lang.code}
          value={lang.code}
          sx={{
            display: "flex",
            gap: "16px",
            width: "100%",
            paddingRight: 0,
            color: "var(--color-white-800)",
          }}
        >
          <Image src="/icons/flag.svg" width={28} height={28} alt="flag" />
          {lang.name}
        </MenuItem>
      ))}
    </CustomSelect>
  );
}
